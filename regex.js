// - `g`: Tìm kiếm toàn cục trong chuỗi.
// - `i`: Không phân biệt hoa thường.
// - `m`: Đa dòng, mẫu sẽ được tìm kiếm qua nhiều dòng (line by line).

// - .: Bất kỳ ký tự nào trừ newline.
//    - ^: Bắt đầu của string hoặc dòng.
//    - $: Kết thúc của string hoặc dòng.
//    - d: Bất kỳ chữ số nào; tương đương với 0-9.
//    - w: Bất kỳ ký tự "word" nào; tương đương với a-zA-Z0-9_.
//    - s: Ký tự trắng (whitespace).
//    - []: Nhóm ký tự, ví dụ [abc] sẽ tìm kiếm 'a', 'b', hoặc 'c'.

// - *: 0 hoặc nhiều lần.
// - +: 1 hoặc nhiều lần.
// - ?: 0 hoặc 1 lần.
// - {n}: Đúng n lần.
// - {n,}: Ít nhất n lần.
// - {n,m}: Từ n đến m lần.

1. Text (văn bản):
   
regex

   ^.+
   
   Mô tả: Chuỗi này kiểm tra nếu có ít nhất một ký tự trở lên (không chấp nhận chuỗi rỗng).

2. Password (mật khẩu):
   
regex

   .{8,}
   
   Mô tả: Chuỗi này đảm bảo rằng mật khẩu phải có ít nhất 8 ký tự.

3. Email:
   
regex

   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   
   Mô tả: Một pattern đơn giản để kiểm tra định dạng cơ bản của email.

4. Number (số):
   
regex

   ^-?d+$
   
   Mô tả: Chuỗi regex này cho phép số nguyên dương hoặc âm.

5. Telephone (số điện thoại):
   
regex

   ^+?(d{1,3}[- ]?)?d{9,10}$
   