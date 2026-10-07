# VietPickleball – app Android

App Android của https://vietpickleball.vn, đóng gói dạng Trusted Web Activity (app mở thẳng trang web, sửa web là app tự cập nhật).

- `twa-manifest.json` — tên app, mã gói `vn.vietpickleball.app`, màu, biểu tượng, số phiên bản.
- `build.js` — tạo dự án Android từ cấu hình trên (thư viện Bubblewrap của Google Chrome Labs).
- `.github/workflows/build.yml` — GitHub tự đóng gói file `.aab` (chưa ký) và đưa vào mục Releases.

Muốn ra bản mới: tăng `appVersionCode` và `appVersion` trong `twa-manifest.json`.

Đơn vị phát hành: Công ty TNHH MTV Thầy Cao Anh (MST 0111416807).
