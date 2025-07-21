/* eslint-disable */
import React, { useState } from 'react'
import "../css/navbar.css";

function Header() {
  const [search,setSearch] = useState('');
   const [isListening, setIsListening] = useState(false);
  let recognition;

  // Check for Web Speech API support
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'vi-VN'; // Set language to Vietnamese
  }

  const submitSearch = () => {
    if (search !== '') {
      window.location.replace('/vu-tru-phim/tim-kiem/' + search);
    }
  };

  const handleVoiceSearch = async () => {
    if (!recognition) {
      alert('Voice search is not supported in this browser or device.');
      return;
    }

    // Check microphone permission
    if (navigator.permissions) {
      try {
        const permission = await navigator.permissions.query({ name: 'microphone' });
        if (permission.state === 'denied') {
          alert('Microphone access is denied. Please enable it in your device settings.');
          return;
        }
      } catch (error) {
        console.warn('Permission API not fully supported on this browser.');
      }
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearch(transcript);
        submitSearch();
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="https://pngimg.com/d/meta_PNG5.png" className='img-fluid' style={{ height: '40px' }} alt="Brand Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/vu-tru-phim/phim-moi">
                  Phim đang chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/vu-tru-phim/loai-phim/phim-le">
                  Phim lẻ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/vu-tru-phim/loai-phim/phim-bo">
                  Phim bộ
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Thể loại
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ width: "100vw", left: 0 }}>
                  <div className="row">
                    <div className="col-md-3">
                      <ul>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/hanh-dong">Hành động</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/hai">Hài</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/chinh-kich">Chính kịch</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/lich-su">Lịch sử</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/bi-an">Bí ẩn</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/gay-can">Gay cấn</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/hoat-hinh">Hoạt hình</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/tai-lieu">Tài liệu</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/gia-dinh">Gia đình</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/lang-man">Lãng mạn</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/tam-ly">Tâm lý</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/tinh-cam">Tình cảm</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/phieu-luu">Phiêu lưu</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/gia-tuong">Giả tưởng</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/kinh-di">Kinh dị</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/khoa-hoc-vien-tuong">Khoa học viễn tưởng</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/chien-tranh">Chiến tranh</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/co-trang">Cổ trang</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/hinh-su">Hình sự</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/nhac">Nhạc</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/mien-tay">Miền Tây</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/loai-phim/18-plus">Phim 18+</a></li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Quốc gia
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1" style={{ width: "100vw", left: 0 }}>
                  <div className="row">
                    <div className="col-md-3">
                      <ul>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/au-my">Âu Mỹ</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/anh">Anh</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/trung-quoc">Trung Quốc</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/indonesia">Indonesia</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/viet-nam">Việt Nam</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/phap">Pháp</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/hong-kong">Hồng Kông</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/han-quoc">Hàn Quốc</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/nhat-ban">Nhật Bản</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/thai-lan">Thái Lan</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/dai-loan">Đài Loan</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/nga">Nga</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/ha-lan">Hà Lan</a></li>
                        <li><a className="dropdown-item" href="/vu-tru-phim/quoc-gia/philippines">Philippines</a></li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>

            </ul>
            <div className="d-flex">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success me-2" type="button" onClick={() => submitSearch()}>
                Search
              </button>
              <button
                className={`btn ${isListening ? 'btn-danger' : 'btn-outline-secondary text-light'}`}
                type="button"
                onClick={handleVoiceSearch}
                title="Voice Search"
              >
                {isListening ? 'Listening...' : '🎙'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
