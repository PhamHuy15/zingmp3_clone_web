
const search = document.querySelector('.search-music input');
const headerPrevBtn = document.querySelector('.prev-btn');
const headerNextBtn = document.querySelector('.next-btn');
const suggest = document.querySelector('.suggest__list');
const heading = document.querySelector('.footer-item-heading h3');
const thumb = document.querySelector('.footer-img img');
const singerName = document.querySelector('.footer-item-link');
const audio = document.querySelector('#audio');
const playList = document.querySelector('.list-song');
const playControlBtn = document.querySelector('.player-btn-item--play-control');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const songCheckItem = document.querySelector('.select-song-item--icon input');
const menuList = document.querySelector('.bottom-navbar-list').querySelectorAll('.bottom-navbar-item');
const uploadBtn = document.querySelector('.bottom-song-navbar').querySelectorAll('.bottom-navbar-song-btn--like');
const settingMenu = document.querySelector('.setting-menu');
const settingItemControl = document.querySelector('.setting-item-control');
const profileItem = document.querySelector('.profile-item');
const headerRightOverlay = document.querySelector('.header-right-overlay');
const actionLikes = document.querySelectorAll('.action-like')
const checkbox = document.querySelector('.select-song-item--icon input');

const progress = document.querySelector('#progess');

const nextBtn = document.querySelector('.next-btn-song i');
const preBtn = document.querySelector('.prev-btn-song i');
const randomBtn = document.querySelector('.random-btn');
const repeatBtn = document.querySelector('.repeat-song-btn');
const currentVolume = document.querySelector('#volume');
const volumeItem = document.querySelector('.volume-control i');

var app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'Forget me now',
            singer: 'Fisty, Trí dũng',
            path: './asset/music/song-1.mp3',
            image: './asset/img/img1.webp',
            time: '1:11'
        },

        {
            name: 'Hẹn ngày mai yêu',
            singer: 'long cao',
            path: './asset/music/song-2.mp3',
            image: './asset/img/img2.webp',
            time: '5:03'
        },

        {
            name: 'Cho tôi lang thang',
            singer: 'Den, ngọt',
            path: './asset/music/song-3.mp3',
            image: './asset/img/img3.webp',
            time: '4:19'
        },

        {
            name: 'Không Tên',
            singer: 'MCK',
            path: './asset/music/song-4.mp3',
            image: './asset/img/img4.webp',
            time: '2:10'
        },

        {
            name: 'An thần',
            singer: 'LowG',
            path: './asset/music/song-5.mp3',
            image: './asset/img/img5.webp',
            time: '3:21'
        },

        {
            name: 'Thói quen (25 mét vuông)',
            singer: 'Hoàng dũng, GDucky',
            path: './asset/music/song-6.mp3',
            image: './asset/img/img6.webp',
            time: '4:40'
        },

        {
            name: 'Uầy',
            singer: 'MCk',
            path: './asset/music/song-7.mp3',
            image: './asset/img/img7.webp',
            time: '3:20'
        },

        {
            name: 'Tháng 4 là lời nói dối của em',
            singer: 'Hà Anh Tuấn',
            path: './asset/music/song-8.mp3',
            image: './asset/img/img8.webp',
            time: '3:03'
        },

        {
            name: 'Pilow',
            singer: 'Keishi',
            path: './asset/music/song-9.mp3',
            image: './asset/img/img9.webp',
            time: '3:40'
        },

        {
            name: 'Drunk',
            singer: 'Keishi',
            path: './asset/music/song-10.mp3',
            image: './asset/img/img10.webp',
            time: '3:05'
        },
    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="select-song-item ${index === app.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div
                        class="select-song-item-left"
                    >
                        <div
                            class="select-song-item--icon"
                        >
                            <i
                                class="bx bx-music"
                            ></i>
                            <input type="checkbox">
                        </div>

                        <div class="song-card">
                            <img
                                src="${song.image}"
                                alt=""
                                class="song-card-image"
                            />
                        </div>

                        <div
                            class="select-song-text"
                        >
                            <span>
                                ${song.name}
                            </span>

                            <a
                                href=""
                                class="select-song-text-content"
                            >
                                ${song.singer}
                            </a>
                        </div>
                    </div>

                    <div
                        class="select-song-item-content"
                    >
                        <div class="album-info">
                            <span
                                >${song.singer}</span
                            >
                        </div>
                    </div>

                    <div
                        class="select-song-item-right"
                    >
                        <div class="hover-item">
                            <div
                                class="hover-item-icon"
                            >
                                <i
                                    class="bx bxs-microphone-alt"
                                ></i>
                            </div>
                        </div>

                        <div
                            class="action-item"
                        >
                            <div
                                class="action-item-box"
                            >
                                <button
                                    class="action-like"
                                >
                                    <i
                                        class="bx bxs-heart"
                                    ></i>
                                </button>
                                <div
                                    class="action-duration"
                                >
                                    <span
                                        >${song.time}</span
                                    >

                                    <i
                                        class="bx bx-dots-horizontal-rounded"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
        playList.innerHTML = htmls.join('');
    },
    handleEvents: function () {
        // hiên lịch sử khi click vào thanh tìm kiếm
        search.onclick = function () {
            this.parentElement.classList.add('is-collapse')
            suggest.classList.remove('hide')
        }

        suggest.onmousedown = function (e) {
            e.preventDefault();
        }

        search.onblur = function () {
            this.parentElement.classList.remove('is-collapse')
            suggest.classList.add('hide')
        }
        // phần setting
        settingMenu.onclick = function () {
            this.classList.toggle('show');
            headerRightOverlay.classList.remove('hide');
        }

        // ngăn sự nổi bọt ở bảng setting
        settingItemControl.onclick = function (e) {
            e.stopPropagation();
        }

        headerRightOverlay.onclick = function (e) {
            settingMenu.classList.remove('show');
            this.classList.add('hide');
        }

        // khi muốn muốn like bài hát và huỷ like
        actionLikes.forEach(item => {
            item.onclick = function () {
                this.classList.toggle('active')
            }
        })

        // khi chọn nội dung list menu
        menuList.forEach(item => {
            item.onclick = function () {
                menuList.forEach(elements => elements.classList.remove('active'));

                this.classList.add('active');
            }
        })

        // khi chọn list nhạc yêu thích và nhạc đã tải xuống
        uploadBtn.forEach(item => {
            item.onclick = function () {
                uploadBtn.forEach(elements => elements.classList.remove('active'));
                this.classList.add('active');
            }
        })

        // phần play và pause button
        playControlBtn.addEventListener('click', function () {
            if (app.isPlaying) {
                this.classList.remove('playing');
                app.isPlaying = false;
                audio.pause();
            } else {
                this.classList.add('playing');
                app.isPlaying = true;
                audio.play();
            }
        })

        // khi tiến độ thời gian thay đổi
        audio.addEventListener('timeupdate', function () {
            if (audio.duration) {
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
                progress.value = progressPercent;
            }
        })

        // khi tua bài hát
        progress.onchange = function (e) {
            const seekTime = Math.floor(audio.duration * e.target.value / 100)
            audio.currentTime = seekTime;
        }

        // khi next song
        nextBtn.onclick = function () {
            playControlBtn.classList.add('playing')
            if (app.isRandom) {
                app.PlayRandomSong();
            } else {
                app.nextSong();
            }
            audio.play();
            app.render();
        }

        // khi prev song
        preBtn.onclick = function () {
            playControlBtn.classList.add('playing')
            if (app.isRandom) {
                app.PlayRandomSong();
            } else {
                app.prevSong();
            }
            audio.play();
            app.render();
        }

        // khi random song
        randomBtn.onclick = function () {
            app.isRandom = !app.isRandom;
            this.classList.toggle('active', app.isRandom);
        }

        // next song khi bài hát kết thúc
        audio.onended = function () {
            if (app.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        }

        //khi lặp lại bài hát
        repeatBtn.onclick = function () {
            app.isRepeat = !app.isRepeat;
            this.classList.toggle('active', app.isRepeat);
        }

        // khi tăng giảm âm lượng
        currentVolume.onchange = function () {
            app.changeVolume();
        }

        // khi bật tắt volume
        volumeItem.onclick = function () {
            audio.volume = 0;
            currentVolume.value = 0;

        }

        playList.onclick = function (e) {
            if (e.target.closest('.select-song-item--icon input')) {
                app.currentIndex = Number(e.target.closest('.select-song-item--icon input:checked').dataset.index)
            }
        }

        // khi click vào mỗi playlist 
        playList.onclick = function (e) {
            const songNode = e.target.closest('.select-song-item:not(.active)');
            const thumbNode = e.target.closest('.select-song-item .song-card');
            if (songNode || thumbNode) {
                // phát bài hát khi click vào song 
                if (thumbNode) {
                    app.currentIndex = Number(songNode.dataset.index);
                    playControlBtn.classList.add('playing')
                    app.loadCurrentSong();
                    app.render();
                    audio.play();
                }
            }
        }
    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex];
            }
        })
    },

    loadCurrentSong: function () {
        thumb.setAttribute('src', this.currentSong.image);
        heading.textContent = this.currentSong.name;
        singerName.textContent = this.currentSong.singer;
        audio.setAttribute('src', this.currentSong.path);
    },

    // xử lí khi next song
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }

        this.loadCurrentSong();
    },

    // xử lí khi prev song
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex === 0) {
            this.currentIndex = this.songs.length - 1;
        }

        this.loadCurrentSong();
    },

    // xử lí random bài hát
    PlayRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex)

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    // xử lí tăng giảm âm lượng
    changeVolume: function () {
        audio.volume = currentVolume.value / 100;
    },


    start: function () {
        this.defineProperties();

        this.handleEvents();

        this.loadCurrentSong();

        this.render();

        this.nextSong();

        this.PlayRandomSong();

        this.changeVolume();

    }
}

app.start();