<template>
  <main class="profile-page layout layout--3">
    <div class="container">
      <!-- Topics Start -->
      <div class="activities__container">
        <div class="topics__header">
          <h2>Study Topics</h2>
        </div>
        <div class="activities__container__inner">
          <div class="topics">
            <ul class="topics__list">
              <li>
                <a href="#" class="active"
                  >All
                  <span>10</span>
                </a>
              </li>

              <li>
                <a href="#">JAVASCRIPT<span>1</span> </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="scroll-marker">
          <span></span>
        </div>
      </div>

      <!-- Room List Start -->
      <div class="roomList">
        <div class="profile">
          <div class="profile__avatar">
            <div class="avatar avatar--large active">
              <img
                id="profile-img"
                src="../assets/images/user.png"
                class="online"
                alt=""
              />
            </div>
          </div>
          <div class="profile__info">
            <div class="profile_info_container">
              <div>
                <div>
                  <div>
                    <h3>root</h3>
                  </div>
                </div>
                <div>
                  <div class="profile-user-followers">
                    <h4>@root 10 followers</h4>
                  </div>

                  <div class="btn btn--main btn--pill" id="followers">
                    <a class="follow-span">Follow</a>
                  </div>
                </div>
              </div>
              <div>
                <a href="#">
                  <div class="header__user">
                    <button type="button" class="icon-button">
                      <span class="material-symbols-outlined">chat</span>
                    </button>
                  </div>
                </a>
                <a href="#" target="_blank">
                  <div class="header__user">
                    <button type="button" class="icon-button">
                      <span class="material-symbols-outlined">
                        storefront
                      </span>
                    </button>
                  </div>
                </a>
              </div>
              <!-- <p>@{{ user.username }}</p> -->
            </div>

            <!-- <a href="#" class="btn btn--main btn--pill"
              >Edit Profile</a
            >
           -->
          </div>
          <div class="profile__about">
            <h3>About</h3>
            <p class="profile__bio">user bio info</p>
          </div>
        </div>
        <!-- --------ROOM FEED COMPONENT--------- -->
        <div class="roomListRoom">
          <div class="roomListRoom__header">
            <a href="#" class="roomListRoom__author">
              <div class="avatar avatar--small">
                <img src="../assets/images/user.png" />
              </div>
              <span>@ROOT</span>
            </a>
            <div class="roomListRoom__actions">
              <span>20 mint ago</span>
            </div>
          </div>
          <div class="roomListRoom__content">
            <a href="#">JAVASCRIPT</a>
          </div>
          <div class="roomListRoom__meta">
            <a href="#" class="roomListRoom__joined">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>user-group</title>
                <path
                  d="M30.539 20.766c-2.69-1.547-5.75-2.427-8.92-2.662 0.649 0.291 1.303 0.575 1.918 0.928 0.715 0.412 1.288 1.005 1.71 1.694 1.507 0.419 2.956 1.003 4.298 1.774 0.281 0.162 0.456 0.487 0.456 0.85v4.65h-4v2h5c0.553 0 1-0.447 1-1v-5.65c0-1.077-0.56-2.067-1.461-2.584z"
                ></path>
                <path
                  d="M22.539 20.766c-6.295-3.619-14.783-3.619-21.078 0-0.901 0.519-1.461 1.508-1.461 2.584v5.65c0 0.553 0.447 1 1 1h22c0.553 0 1-0.447 1-1v-5.651c0-1.075-0.56-2.064-1.461-2.583zM22 28h-20v-4.65c0-0.362 0.175-0.688 0.457-0.85 5.691-3.271 13.394-3.271 19.086 0 0.282 0.162 0.457 0.487 0.457 0.849v4.651z"
                ></path>
                <path
                  d="M19.502 4.047c0.166-0.017 0.33-0.047 0.498-0.047 2.757 0 5 2.243 5 5s-2.243 5-5 5c-0.168 0-0.332-0.030-0.498-0.047-0.424 0.641-0.944 1.204-1.513 1.716 0.651 0.201 1.323 0.331 2.011 0.331 3.859 0 7-3.141 7-7s-3.141-7-7-7c-0.688 0-1.36 0.131-2.011 0.331 0.57 0.512 1.089 1.075 1.513 1.716z"
                ></path>
                <path
                  d="M12 16c3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.859 0-7 3.141-7 7s3.141 7 7 7zM12 4c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5c0-2.757 2.243-5 5-5z"
                ></path>
              </svg>
              100 Joined
            </a>
            <p class="roomListRoom__topic">javascript</p>
          </div>
        </div>
        <!-- ------------END FEED COMPONENT----------- -->
      </div>
      <!-- Room List End -->

      <!-- Activities Start -->
      <div class="activities__container">
        <div class="activities__header">
          <h2>Room Activities</h2>
        </div>
        <div class="activities__container__inner">
          <div class="activities">
            <div class="activities__box">
              <div class="activities__boxHeader roomListRoom__header">
                <a
                  href="{% url 'user-profile' message.user.id %}"
                  class="roomListRoom__author"
                >
                  <div class="avatar avatar--small">
                    <img src="../assets/images/user.png" />
                  </div>
                  <p>
                    @root
                    <span>10 minit ago</span>
                  </p>
                </a>
                <div class="roomListRoom__actions">
                  <a href="{% url 'delete-message' message.id %}">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>remove</title>
                      <path
                        d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="activities__boxContent">
                <p>replied to post “<a href="#">xyz</a>”</p>
                <div class="activities__boxRoomContent">message body</div>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-marker"></div>
      </div>

      <!-- Activities End -->
    </div>
  </main>
</template>

<script>
export default {
  name: "Profile",
  data: function () {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
<style scoped></style>
