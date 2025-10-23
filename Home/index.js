document.addEventListener("DOMContentLoaded", () => {
  // أول مرة المستخدم يدخل نحذف أي بيانات قديمة
  if (!localStorage.getItem("visitedBefore")) {
    localStorage.clear();
    localStorage.setItem("visitedBefore", "true");
  }

  const addBtn = document.getElementById("addPostBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const postForm = document.getElementById("postForm");

  // لما يضغط Add Post
  addBtn.addEventListener("click", () => {
    document.getElementById("addPostForm").classList.remove("hidden");
    addBtn.classList.add("hidden");
    document.getElementById("welcomeSection").style.display = "none";
  });

  // لما يضغط Cancel
  cancelBtn.addEventListener("click", () => {
    document.getElementById("addPostForm").classList.add("hidden");
    addBtn.classList.remove("hidden");

    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    if (posts.length === 0) {
      document.getElementById("welcomeSection").style.display = "block";
    }
  });

  // لما يضيف بوست
  postForm.addEventListener("submit", handleAddPost);

  // عرض البوستات عند تحميل الصفحة
  showPosts();
});

function showPosts() {
  const postsDiv = document.getElementById("posts");
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  // ✅ نصلح أي بوستات قديمة ناقصة بيانات
  posts = posts.map(p => ({
    likes: 0,
    liked: false,
    comments: [],
    ...p,
  }));

  postsDiv.innerHTML = "";

  if (posts.length === 0) {
    document.getElementById("welcomeSection").style.display = "block";
  } else {
    document.getElementById("welcomeSection").style.display = "none";
  }

  // إنشاء كل بوست
  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <p>${post.description}</p>
      ${post.image ? `<img src="${post.image}" class="post-img">` : ""}
      <div class="post-footer">
        <button class="like-btn ${post.liked ? "liked" : ""}" data-index="${index}">
          ❤️ Like (${post.likes})
        </button>
        <span>${post.comments.length} comments</span>
      </div>
      <div class="comment-section" id="comments-${index}">
        ${post.comments.map(c => `<div class="comment">${c}</div>`).join("")}
        <div class="add-comment">
          <input type="text" placeholder="Write a comment..." id="commentInput-${index}">
          <button onclick="addComment(${index})">Post</button>
        </div>
      </div>
    `;
    postsDiv.prepend(div);
  });

  // تفعيل اللايكات
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", handleLike);
  });

  // ✅ نحفظ الشكل الجديد (بعد الإصلاح)
  localStorage.setItem("posts", JSON.stringify(posts));
}

// ✅ دالة إضافة بوست جديد
function handleAddPost(e) {
  e.preventDefault();

  const desc = document.getElementById("desc").value.trim();
  const imageLink = document.getElementById("imageLink").value.trim();

  if (!desc) return alert("Please write a description!");

  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const newPost = {
    id:Date.now(), // I add it
    description: desc,
    image: imageLink || "",
    likes: 0,
    liked: false,
    comments: [],
    authorId:JSON.parse(localStorage.getItem("currentUser")).id // I add it 
  };

  posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));

  // مسح الفورم بعد الإضافة
  document.getElementById("desc").value = "";
  document.getElementById("imageLink").value = "";

  document.getElementById("addPostForm").classList.add("hidden");
  document.getElementById("addPostBtn").classList.remove("hidden");

  showPosts();

  // إشعار بسيط بعد الإضافة ✅
  alert("✅ Post added successfully!");
}

// ✅ دالة اللايك
function handleLike(e) {
  const index = e.target.dataset.index;
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  if (!posts[index].liked) {
    posts[index].likes += 1;
    posts[index].liked = true;
  } else {
    posts[index].likes -= 1;
    posts[index].liked = false;
  }

  localStorage.setItem("posts", JSON.stringify(posts));
  showPosts();
}

// ✅ دالة الكومنت
function addComment(index) {
  const input = document.getElementById(`commentInput-${index}`);
  const comment = input.value.trim();
  if (!comment) return;

  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts[index].comments.push(comment);
  localStorage.setItem("posts", JSON.stringify(posts));
  input.value = "";

  showPosts();
}
