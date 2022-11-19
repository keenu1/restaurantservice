// class NavbarUserIndex extends HTMLElement {
//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         this.innerHTML = `

//     <header class="header" id="header">
//         <nav class="nav container">
//             <a href="#" class="nav__logo">Restaurant Service</a>

//             <div class="nav__menu" id="nav-menu">
//                 <ul class="nav__list">
//                     <li class="nav__item">
//                         <a href="#materi" class="nav__link active-link">
//                             <i class='bx bx-book nav__icon'></i>
//                             <span class="nav__name">Materi</span>
//                         </a>
//                     </li>

//                     <li class="nav__item">
//                         <a href="#video" class="nav__link">
//                             <i class='bx bx-video nav__icon'></i>
//                             <span class="nav__name">Video</span>
//                         </a>
//                     </li>

//                     <li class="nav__item">
//                         <a href="#evaluasi" class="nav__link">
//                             <i class='bx bx-file nav__icon'></i>
//                             <span class="nav__name">Evaluasi</span>
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             <div class="nav__menuprofilesearch">
//                 <div class="search__formnavbox">
//                     <input type="search" placeholder="cari" class="search__formnav">
//                     <label for="" class="search__formnavicon"><i class='bx bx-search'></i></label>
//                 </div>
//                 <img src="assets/img/profile.png" alt="" class="nav__img" onclick="toggleMenu()">
//             </div>



//             <div class="sub__menu__wrap" id="subMenu">
//                 <div class="sub__menu ">
//                     <div class="user__info">
//                         <img src="assets/img/profile.png" alt="">
//                         <h2>User</h2>
//                     </div>
//                     <hr>
//                     <a href="#" class="sub__menu__link">
//                         <i class='bx bx-user'></i>
//                         <p>Ganti avatar</p>

//                     </a>
//                     <a href="#" class="sub__menu__link">
//                         <i class='bx bx-lock-alt'></i>
//                         <p>Ganti password</p>

//                     </a>
//                     <a href="#" class="sub__menu__link">
//                         <i class='bx bx-log-out'></i>
//                         <p>Keluar</p>

//                     </a>
//                 </div>
//             </div>

//         </nav>
//     </header>

//     `;
//     }
// }

// class NavbarUser extends HTMLElement {
//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         this.innerHTML = `
//          <!--=============== HEADER ===============-->
//     <header class="header" id="header">
//         <nav class="nav container">
//             <a href="../index.html" class="nav__logo">Restaurant Service</a>

//             <div class="nav__menu" id="nav-menu">
//                 <ul class="nav__list">
//                     <li class="nav__item">
//                         <a href="usermateri.html " class="nav__link">
//                             <i class='bx bxs-book nav__icon'></i>
//                             <span class="nav__name">Kumpulan Materi</span>
//                         </a>
//                     </li>
//                     <li class="nav__item">
//                         <a href="uservideo.html" class="nav__link ">
//                             <i class='bx bxs-video nav__icon'></i>
//                             <span class="nav__name">Kumpulan Video</span>
//                         </a>
//                     </li>

//                     <li class="nav__item">
//                         <a href="userevaluasi.html" class="nav__link ">
//                             <i class='bx bxs-file nav__icon'></i>
//                             <span class="nav__name">Kumpulan Evaluasi</span>
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             <div class="nav__menuprofilesearch">
//                 <img src="../assets/img/profile.png" alt="" class="nav__img" onclick="toggleMenu()">
//             </div>



//             <div class="sub__menu__wrap" id="subMenu">
//                 <div class="sub__menu ">
//                     <div class="user__info">
//                         <img src="assets/img/profile.png" alt="">
//                         <h2>User</h2>
//                     </div>
//                     <hr>
//                     <a href="#" class="sub__menu__link">
//                         <i class='bx bx-user'></i>
//                         <p>Ganti avatar</p>

//                     </a>
//                     <a href="#" class="sub__menu__link">
//                         <i class='bx bx-lock-alt'></i>
//                         <p>Ganti password</p>

//                     </a>
//                     <a href="#" class="sub__menu__link">
//                         <i class='bx bx-log-out'></i>
//                         <p>Keluar</p>

//                     </a>
//                 </div>
//             </div>

//         </nav>
//     </header>
//     `;
//     }
// }

// customElements.define('user-navbar-index', NavbarUserIndex);
// customElements.define('user-navbar', NavbarUser);