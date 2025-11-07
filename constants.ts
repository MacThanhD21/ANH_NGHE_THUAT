
import React from 'react';
import {
  SnowIcon, RainIcon, CherryBlossomIcon, FogIcon, CloudIcon, LeafIcon, HeartIcon, SparklesIcon, FireworksIcon, BubbleIcon, FlowerIcon, PaperFlowerIcon,
  LayoutSingleIcon, LayoutFilmStripIcon, LayoutGridIcon, LayoutDynamicIcon, LayoutPortraitFocusIcon, LayoutStoryIcon, LayoutCompareIcon, LayoutTrioIcon, LayoutAngleIcon, LayoutCollageIcon,
  LayoutZigZagIcon, LayoutLShapedIcon, LayoutArcIcon, LayoutDiamondIcon,
} from './components/IconComponents';
import { Concept, Style, LayoutGroup, AspectRatio } from './types';

// 1. CONCEPTS
export const CONCEPTS: Concept[] = [
  { id: 'tuyet', name: 'Tuyết Rơi', promptFragment: 'khung cảnh tuyết rơi lãng mạn, những bông tuyết trắng xóa nhẹ nhàng bay trong gió', icon: SnowIcon },
  { id: 'mua', name: 'Mưa Rơi', promptFragment: 'dưới một cơn mưa bất chợt, những hạt mưa lấp lánh như pha lê', icon: RainIcon },
  { id: 'hoaanhdao', name: 'Hoa Anh Đào', promptFragment: 'hàng ngàn cánh hoa anh đào bay trong gió, tạo nên một khung cảnh thơ mộng', icon: CherryBlossomIcon },
  { id: 'hoaroi', name: 'Hoa Rơi', promptFragment: 'một cơn mưa hoa lãng mạn với nhiều loại hoa khác nhau như hoa hồng, hoa cúc, hoa oải hương đang rơi xung quanh', icon: FlowerIcon },
  { id: 'hoagiay', name: 'Hoa Giấy Rơi', promptFragment: 'khung cảnh lãng mạn với những bông hoa giấy nhiều màu sắc rơi nhẹ nhàng như một cơn mưa hoa', icon: PaperFlowerIcon },
  { id: 'suongmu', name: 'Sương Mù', promptFragment: 'trong làn sương mù huyền ảo buổi sớm, mọi thứ trở nên mờ ảo và bí ẩn', icon: FogIcon },
  { id: 'may', name: 'Mây Trôi', promptFragment: 'nằm trên một đám mây bồng bềnh, trôi lơ lửng giữa bầu trời xanh ngắt', icon: CloudIcon },
  { id: 'la', name: 'Lá Rơi', promptFragment: 'con đường ngập tràn lá vàng rơi của mùa thu, tạo nên một thảm lá đầy màu sắc', icon: LeafIcon },
  { id: 'tim', name: 'Trái Tim Bay', promptFragment: 'hàng trăm trái tim 3D nhỏ màu hồng và đỏ bay xung quanh một cách diệu kỳ', icon: HeartIcon },
  { id: 'kimtuyen', name: 'Kim Tuyến', promptFragment: 'một cơn mưa kim tuyến vàng và bạc lấp lánh đang rơi xuống, tạo hiệu ứng ma thuật', icon: SparklesIcon },
  { id: 'phaohoa', name: 'Pháo Hoa', promptFragment: 'dưới bầu trời đêm rực rỡ pháo hoa, ánh sáng nhiều màu sắc chiếu rọi', icon: FireworksIcon },
  { id: 'bongbong', name: 'Bong Bóng', promptFragment: 'giữa một không gian đầy bong bóng xà phòng trong suốt, phản chiếu ánh sáng cầu vồng', icon: BubbleIcon },
];

// 2. STYLES
export const STYLES: Style[] = [
    { id: 'dienanh', name: 'Điện ảnh', promptFragment: 'phong cách điện ảnh, màu sắc đậm, ánh sáng dramatíc, tỉ lệ khung hình 21:9' },
    { id: 'nghethuat', name: 'Nghệ thuật', promptFragment: 'như một tác phẩm nghệ thuật kỹ thuật số, các đường nét tinh xảo, màu sắc siêu thực' },
    { id: 'sangchanh', name: 'Sang chảnh', promptFragment: 'thần thái sang chảnh, trang phục hàng hiệu, bối cảnh xa hoa, đẳng cấp' },
    { id: 'caocap', name: 'Cao cấp', promptFragment: 'phong cách high-fashion, tạp chí Vogue, biểu cảm sắc lạnh, bố cục tối giản' },
    { id: 'thanthien', name: 'Thần tiên', promptFragment: 'như trong một câu chuyện cổ tích, ánh sáng huyền ảo, màu sắc mộng mơ, có các yếu tố kỳ ảo' },
    { id: 'anime', name: 'Anime/Makoto Shinkai', promptFragment: 'phong cách anime của Makoto Shinkai, ánh sáng rực rỡ, chi tiết tinh xảo, màu xanh đặc trưng' },
    { id: 'tranhson dầu', name: 'Tranh Sơn dầu', promptFragment: 'với những nét cọ dày và kết cấu của một bức tranh sơn dầu cổ điển' },
    { id: 'nhiepanhden trang', name: 'Nhiếp ảnh Đen trắng', promptFragment: 'nhiếp ảnh đen trắng nghệ thuật, độ tương phản cao, tập trung vào hình khối và cảm xúc' },
    { id: 'vintage', name: 'Vintage', promptFragment: 'phong cách vintage, màu phim cũ, hoài niệm, trang phục thập niên 80' },
    { id: 'cyberpunk', name: 'Cyberpunk', promptFragment: 'phong cách cyberpunk, ánh sáng neon, thành phố tương lai, công nghệ cao' },
    { id: 'langman', name: 'Lãng mạn', promptFragment: 'không khí lãng mạn, màu sắc pastel nhẹ nhàng, ánh sáng mềm mại' },
    { id: 'hanquoc', name: 'Nàng thơ Hàn Quốc', promptFragment: 'phong cách nàng thơ Hàn Quốc, trong trẻo, da căng bóng, màu ảnh trong veo' },
    { id: 'trungquoc', name: 'Cổ trang Trung Quốc', promptFragment: 'phong cách cổ trang kiếm hiệp, trang phục lụa bay phấp phới, bối cảnh núi non hùng vĩ' },
    { id: 'kinhdi', name: 'Kinh dị', promptFragment: 'phong cách kinh dị, tông màu lạnh, tối, biểu cảm ám ảnh, không khí rùng rợn' },
    { id: 'tuoisang', name: 'Tươi sáng', promptFragment: 'phong cách tươi sáng, rực rỡ, nhiều năng lượng, màu sắc sống động' },
    { id: 'amap', name: 'Ấm áp', promptFragment: 'phong cách ấm áp, tông màu cam vàng, ánh nắng chiều, cảm giác gemütlichkeit' },
    { id: 'doisong', name: 'Đời thường', promptFragment: 'khoảnh khắc đời thường, tự nhiên, không sắp đặt, như một bức ảnh chụp lén' },
    { id: 'thugian', name: 'Thư giãn', promptFragment: 'cảm giác thư giãn, yên bình, bối cảnh thiên nhiên tĩnh lặng' },
    { id: 'maoquai', name: 'Màu sắc sặc sỡ', promptFragment: 'sử dụng các khối màu sắc sặc sỡ, tương phản mạnh, phong cách pop-art' },
    { id: 'toigian', name: 'Tối giản', promptFragment: 'phong cách tối giản, bố cục sạch sẽ, ít chi tiết, tập trung vào chủ thể' },
];


// 3. LAYOUT OPTIONS
export const LAYOUT_OPTIONS: LayoutGroup[] = [
  {
    title: "📸 BỐ CỤC ẢNH",
    layouts: [
      { id: 'single', name: 'Một ảnh đơn', promptFragment: 'một bức ảnh đơn, tập trung vào chủ thể. Bố cục chỉ có một khung hình duy nhất.', icon: LayoutSingleIcon },
      { id: 'h2', name: '2 ảnh ngang', promptFragment: 'bố cục 2 ảnh ngang song song, đối xứng trái/phải (classic style).', icon: LayoutDynamicIcon },
      { id: 'h3', name: '3 ảnh ngang', promptFragment: 'bố cục 3 ảnh ngang đều nhau, kiểu tạp chí hoặc lookbook thời trang.', icon: LayoutStoryIcon },
      { id: 'h4', name: '4 ảnh ngang', promptFragment: 'bố cục 4 ảnh ngang, dùng cho concept “biến đổi cảm xúc” hoặc 4 outfit khác nhau.', icon: LayoutTrioIcon },
      { id: 'v2', name: '2 ảnh dọc', promptFragment: 'bố cục 2 ảnh dọc song song, phù hợp chân dung fashion hoặc couple.', icon: LayoutCompareIcon },
      { id: 'v3', name: '3 ảnh dọc', promptFragment: 'bố cục 3 ảnh dọc, layout kiểu Instagram reels hoặc beauty shot.', icon: LayoutFilmStripIcon },
      { id: 'zz3', name: 'Zic-zắc 3 ảnh', promptFragment: 'bố cục 3 ảnh zic-zắc (trái – phải – trái), kể chuyện theo dòng thời gian.', icon: LayoutZigZagIcon },
      { id: 'zz4', name: 'Zic-zắc 4 ảnh', promptFragment: 'bố cục 4 ảnh zic-zắc, kiểu cinematic motion (di chuyển, xoay người, bước đi).', icon: LayoutZigZagIcon },
      { id: 'grid4', name: 'Lưới 2x2', promptFragment: 'bố cục lưới 2x2 (4 ảnh vuông), cân đối, đơn giản, dễ làm poster.', icon: LayoutGridIcon },
      { id: 'grid9', name: 'Lưới 3x3', promptFragment: 'bố cục lưới 3x3 (9 ảnh vuông nhỏ), tạo cảm giác bộ sưu tập mini.', icon: LayoutGridIcon },
      { id: 'spotlight', name: 'Spotlight', promptFragment: 'bố cục 1 ảnh lớn trung tâm + 4 ảnh nhỏ viền xung quanh (spotlight style).', icon: LayoutAngleIcon },
      { id: 'storytelling', name: 'Storytelling', promptFragment: 'bố cục 1 ảnh chính + 3 ảnh phụ góc (storytelling), kiểu “trước – trong – sau”.', icon: LayoutPortraitFocusIcon },
      { id: 'filmstrip_h', name: 'Film Strip Ngang', promptFragment: 'bố cục 3 ảnh dạng film strip ngang, giống khung phim điện ảnh.', icon: LayoutStoryIcon },
      { id: 'filmstrip_v', name: 'Film Strip Dọc', promptFragment: 'bố cục 4 ảnh dạng khung phim dọc (film reel), thích hợp cho vertical story.', icon: LayoutFilmStripIcon },
      { id: 'angles', name: 'Đa góc máy', promptFragment: 'bố cục 3 ảnh chia theo góc máy (close-up – medium – full shot) để thể hiện cảm xúc.', icon: LayoutTrioIcon },
      { id: 'lshape', name: 'Chữ L', promptFragment: 'bố cục 3 ảnh dạng hình chữ L, bất đối xứng lạ mắt.', icon: LayoutLShapedIcon },
      { id: 'diagonal', name: 'Chéo 45°', promptFragment: 'bố cục 3 ảnh chéo 45° (zic zắc nhẹ), tạo chuyển động.', icon: LayoutZigZagIcon },
      { id: 'arc', name: 'Vòng cung', promptFragment: 'bố cục 5 ảnh hình vòng cung, thể hiện sự biến đổi theo thời gian/ngày.', icon: LayoutArcIcon },
      { id: 'clock', name: 'Đồng hồ', promptFragment: 'bố cục 6 ảnh ghép dạng đồng hồ (circle layout), kể story 6 bước.', icon: LayoutCollageIcon },
      { id: 'universe', name: 'Vũ trụ nhân vật', promptFragment: 'bố cục ảnh chính giữa lớn + 6 ảnh nhỏ xung quanh.', icon: LayoutCollageIcon },
    ]
  },
  {
    title: "💎 BỐ CỤC KIM CƯƠNG",
    layouts: [
      { id: 'd_center', name: 'Kim cương trung tâm', promptFragment: 'bố cục 1 ảnh trung tâm hình kim cương + 4 ảnh viền quanh (trên – dưới – trái – phải).', icon: LayoutDiamondIcon },
      { id: 'd_path', name: 'Dải kim cương', promptFragment: 'bố cục 5 ảnh kim cương nối đỉnh, tạo dải đường chéo như viên đá.', icon: LayoutDiamondIcon },
      { id: 'd_v3', name: '3 kim cương dọc', promptFragment: 'bố cục 3 ảnh kim cương xếp hàng dọc, dành cho layout vertical 9:16 TikTok.', icon: LayoutDiamondIcon },
      { id: 'd_focus', name: 'Focus kim cương', promptFragment: 'bố cục 1 ảnh lớn kim cương ở giữa + 2 ảnh nhỏ nghiêng góc 45° hai bên.', icon: LayoutDiamondIcon },
      { id: 'd_frame', name: 'Khung kim cương', promptFragment: 'bố cục 4 ảnh nhỏ xếp thành khung kim cương bao quanh 1 ảnh chính giữa tròn hoặc vuông.', icon: LayoutDiamondIcon },
      { id: 'd_zigzag', name: 'Zic-zắc kim cương', promptFragment: 'bố cục 3 ảnh kim cương zic-zắc chéo (↙ ↗ ↙), hợp với style fashion chuyển động.', icon: LayoutDiamondIcon },
      { id: 'd_rotate', name: 'Kim cương xoay', promptFragment: 'bố cục các ảnh xếp dạng kim cương xoay vòng 45°, tâm giữa là khuôn mặt.', icon: LayoutDiamondIcon },
      { id: 'd_multi', name: 'Kim cương đa lớp', promptFragment: 'bố cục ảnh trung tâm lớn, 4 ảnh nhỏ ở góc 45° tạo viền kim cương đa lớp (multi-layer diamond).', icon: LayoutDiamondIcon },
      { id: 'd_double', name: 'Kim cương kép', promptFragment: 'bố cục 6 ảnh tạo khung kim cương kép (2 lớp, trong nhỏ – ngoài lớn).', icon: LayoutDiamondIcon },
      { id: 'd_mosaic', name: 'Khảm kim cương', promptFragment: 'bố cục ảnh ghép kim cương đan xen, như khảm đá quý, hiệu ứng nổi bật cực mạnh.', icon: LayoutDiamondIcon },
    ]
  }
];


// 4. OUTFITS - Trang phục cao cấp
export const OUTFITS: string[] = [
  // For Women
  "Váy dạ hội Haute Couture xuyên thấu đính hàng ngàn viên kim cương, dáng đuôi cá lộng lẫy.",
  "Đầm cocktail lụa satin màu đỏ ruby, cúp ngực táo bạo và xẻ tà cao đến đùi.",
  "Bộ jumpsuit sequin bạc ôm sát cơ thể, khoét lưng sâu, đi kèm áo choàng lông vũ trắng muốt.",
  "Váy bodycon bằng da bóng màu đen có khóa kéo vàng chạy dọc thân, tôn vinh mọi đường cong.",
  "Đầm dạ hội công chúa làm từ vải tuyn nhiều lớp màu pastel, trang trí hoa 3D và ngọc trai.",
  "Bộ cánh 'Nữ thần Hy Lạp' với váy lụa trắng xếp ly, thắt lưng vàng kim và trang sức rắn quấn tay.",
  "Váy mini-dress Balmain đính cúc vàng đặc trưng, chất liệu vải tweed sang trọng.",
  "Bộ đồ nội y ren cao cấp của La Perla, khoác ngoài là áo choàng lụa mỏng manh.",
  "Trang phục 'Nữ hoàng Ai Cập' với đầm vàng kim, phụ kiện đầu hình rắn hổ mang và trang điểm mắt đậm.",
  "Váy dạ hội nhung đen xẻ ngực sâu, đeo găng tay opera và chuỗi vòng cổ kim cương.",
  "Bộ suit nữ quyền lực màu trắng của Alexander McQueen, cắt may sắc sảo, không mặc nội y.",
  "Đầm hai dây bằng lụa mỏng màu sâm panh, thiết kế tối giản nhưng cực kỳ gợi cảm.",
  "Áo corset da kết hợp chân váy voan bồng bềnh, phong cách gothic-chic.",
  "Váy cut-out táo bạo ở eo và hông, chất liệu thun kim tuyến co giãn.",
  "Bộ bikini đính đá quý, khoác ngoài áo lưới mỏng, đi dạo trên du thuyền sang trọng.",
  "Trang phục 'Thiên thần sa ngã' với đôi cánh lông vũ đen khổng lồ và váy da bó sát.",
  "Áo dài cách tân bằng gấm, phần trên là yếm, khoe trọn bờ vai trần và lưng ong.",
  "Váy cưới hoàng gia của Elie Saab, đính kết thủ công hàng triệu viên pha lê.",
  "Bộ trang phục 'nữ điệp viên' với áo liền quần da, thắt lưng đựng vũ khí và bốt cao gót.",
  "Đầm dạ hội hở lưng hoàn toàn, được cố định bằng những sợi dây chuyền vàng mảnh.",
  "Trang phục nữ chiến binh 'Valkyrie' với áo giáp kim loại cách điệu và váy da xẻ tà.",
  "Váy cocktail tua rua theo phong cách thập niên 20s, lấp lánh và quyến rũ khi chuyển động.",
  "Áo crop-top siêu ngắn kết hợp quần cạp trễ, khoe cơ bụng săn chắc.",
  "Bộ Hanbok cách tân của Hàn Quốc, chất liệu organza mỏng nhìn xuyên thấu.",
  "Váy làm từ những cánh hoa tươi thật, được kết lại một cách nghệ thuật.",

  // For Men
  "Bộ suit may đo bespoke từ vải Scabal cao cấp màu xanh navy, ve áo lụa, cài áo bằng ngọc lục bảo.",
  "Áo khoác tuxedo nhung đen, mặc cùng sơ mi trắng cổ diềm và nơ bướm lụa thủ công.",
  "Bộ vest gile 3 mảnh kẻ sọc, phong cách 'Peaky Blinders', đi kèm đồng hồ quả quýt vàng.",
  "Trang phục hoàng gia Ả Rập với áo choàng bisht thêu chỉ vàng, đội khăn Keffiyeh lụa.",
  "Áo khoác da biker của Saint Laurent, kết hợp quần jeans rách và bốt Chelsea da lộn.",
  "Bộ suit Tom Ford màu mận chín, mặc 'không áo sơ mi', khoe hình thể nam tính.",
  "Áo sơ mi lụa Versace họa tiết baroque đặc trưng, mở ba cúc đầu, đeo dây chuyền vàng.",
  "Trang phục 'Vị thần La Mã' với áo choàng toga trắng và vòng nguyệt quế vàng.",
  "Bộ suit toàn màu trắng, phong cách 'The Great Gatsby', lịch lãm và cổ điển.",
  "Áo khoác dáng dài cashmere của Zegna, mặc cùng áo len cổ lọ và quần tây.",
  "Trang phục 'mafia Ý' với suit kẻ sọc, mũ fedora và một điếu xì gà trên tay.",
  "Bộ giáp Samurai cách điệu, làm từ sợi carbon và da, vừa hiện đại vừa truyền thống.",
  "Áo măng tô da dài đến mắt cá chân, phong cách 'The Matrix', thần thái bí ẩn.",
  "Quần da bó sát kết hợp áo lưới, phong cách rockstar gợi cảm.",
  "Trang phục 'tổng tài bá đạo' với suit đen, sơ mi đen và cà vạt đen.",
  "Bộ pijama lụa cao cấp, đi dép lê của Gucci, thần thái giàu có và thư giãn.",
  "Trang phục 'đấu sĩ' với khố da, giáp tay và cơ bắp cuồn cuộn.",
  "Áo choàng hoàng đế thêu rồng phượng, quyền lực và uy nghiêm.",
  "Bộ suit không tay, khoe trọn bắp tay rắn chắc.",
  "Trang phục 'chàng thơ' với áo sơ mi trắng phanh ngực, quần lụa ống rộng.",

  // Unisex / Avant-garde
  "Trang phục phi giới tính avant-garde làm từ kim loại lỏng và sợi quang học, phát sáng theo nhịp thở.",
  "Bộ kimono cách tân bằng lụa và da, in họa tiết rồng phượng bằng mực phát quang.",
  "Trang phục Cyberpunk với áo khoác tích hợp đèn LED, quần da công nghệ cao và kính thực tế ảo.",
  "Bộ cánh tương lai làm từ vật liệu phản quang, thay đổi màu sắc theo góc nhìn.",
  "Trang phục Haute Couture của Iris van Herpen, tạo khối 3D in từ nhựa sinh học."
];


// 5. ASPECT RATIOS
export const ASPECT_RATIOS: AspectRatio[] = [
    { id: 'square', name: '1:1', value: '1:1'},
    { id: 'portrait', name: '3:4', value: '3:4'},
    { id: 'portrait_tall', name: '9:16', value: '9:16'},
    { id: 'landscape', name: '16:9', value: '16:9'},
]

// 6. IMAGE COUNTS
export const IMAGE_COUNTS: number[] = [1, 2, 3, 4];

// 7. PROMPT SUGGESTIONS (SAMPLE)
export const PROMPT_SUGGESTIONS = {
  tuyet: [
    "Ánh mắt dịu giữa tuyết, tay hứng bông tuyết, bước chậm giữa rừng trắng.",
    "Ngước nhìn trời tuyết, tay cầm dù đen, đi qua con phố yên tĩnh.",
    "Hơi thở tan trong sương lạnh, tay ôm áo khoác, dáng lẻ loi trên cầu gỗ.",
    "Cận mặt nhìn xuống, tay nắm tờ thư, bóng lưng giữa cánh đồng tuyết.",
    "Mắt khẽ nhắm, tay chạm phím piano giữa trời tuyết, dáng xa mờ trong hơi sương.",
    "Ánh mắt chạm nhau trong tuyết, tay chạm nhẹ, một người quay đi xa.",
    "Cận môi hé mở, tay giữ khăn, bước trong con hẻm tuyết phủ.",
    "Ánh nhìn hoài niệm, tay chạm tuyết đầu mùa, dáng đi dưới đèn đường vàng.",
    "Cận mặt dịu dàng, tay đeo nhẫn, bóng dáng xa dần trong cơn tuyết nhẹ.",
    "Mắt sáng trong tuyết rơi, tay mở dù trắng, đi giữa luồng ánh vàng ấm.",
    "Cận mặt trong ánh đèn vàng, tay chạm tuyết, dáng đi qua phố đêm.",
    "Ánh mắt phản cực quang, tay giơ lên ánh sáng, bước giữa tuyết phát sáng.",
    "Mắt nhìn trời sao, tay nắm tuyết, đi xa trên đồi trắng.",
    "Nụ cười nhẹ bên tách cà phê, tay đặt ly, nhìn qua cửa sổ tuyết.",
    "Ánh mắt chờ đợi, tay nắm vali, dáng xa mờ trong sân ga tuyết.",
    "Cận mặt vàng ấm, tay nắm áo khoác, đi dưới đèn đơn lẻ.",
    "Tay viết thư, mực lem trong lạnh, bóng dáng ngồi trên ghế gỗ phủ tuyết.",
    "Ánh nhìn qua ô kính mờ, tay đặt lên kính, dáng xa trong sương.",
    "Cận mặt tĩnh lặng, tay đón gió, đi giữa rừng tuyết lặng im.",
    "Gương mặt nửa sáng nửa tối, tay dang nhẹ, dáng đi qua ngõ nhỏ đầy tuyết.",
    "Ánh mắt lạc giữa không gian trắng xóa, tay giữ áo khoác, bóng đơn độc.",
    "Tuyết rơi pha ánh vàng, tay đưa về phía sáng, dáng nhỏ dần.",
    "Cận mắt buồn, tay cầm ảnh, bóng đi giữa tuyết.",
    "Tuyết mờ phủ nửa khuôn mặt, tay vuốt tóc, dáng đứng nghiêng giữa sương.",
    "Giọt tuyết dừng trên tóc, tay giơ lên, dáng giữa đồng tuyết bất động.",
    "Ánh sáng xiên qua, tay che mặt, dáng nghiêng thơ mộng.",
    "Cận mắt, tay cầm dù, dáng đi một mình giữa phố cũ.",
    "Mắt khẽ nhắm trong ánh sáng mờ, tay dang ra đón tuyết.",
    "Mắt nhìn qua kính mờ, tay đặt nhẹ, dáng xa khuất.",
    "Cận mắt xúc động, tay chạm bức tường tuyết, bước đi vào màn trắng.",
    "Ánh mắt gặp lại, tay dang nhẹ, dáng đi lại gần trong tuyết.",
    "Mưa tuyết rơi, tay cầm ô, ánh sáng pha sương.",
    "Cận mặt ánh ấm, tay hướng xa, dáng nhỏ giữa tuyết.",
    "Nhìn về con phố cũ, tay chạm tường, đi xa giữa gió lạnh.",
    "Mắt nhìn hoàng hôn tuyết, tay buông nhẹ, dáng khuất sau ánh đỏ.",
    "Cận mặt trầm tư, tay giữ phong thư, dáng quay lưng đi xa.",
    "Mắt nhìn xuống, tay nắm tay ai đó, hai dáng song song.",
    "Cận tay run, ánh nhìn ấm, bước cùng nhau trong tuyết.",
    "Mắt nhìn xa, tay cầm đèn lồng, dáng đi khỏi vùng sáng.",
    "Cận môi mỉm cười, tay vẫy chào, dáng nhỏ dần trong bão tuyết.",
    "Cận mắt mơ, tay chạm ánh sáng, dáng giữa sương mờ.",
    "Ánh mắt trong sương, tay mở lối, dáng đi qua cầu gỗ phủ tuyết.",
    "Cận mắt suy tư, tay cầm bút, dáng ngồi bên hồ tuyết.",
    "Cận mặt với tai nghe, tay nhắm mắt cảm nhạc, tuyết rơi quanh.",
    "Ánh sáng xuyên qua tuyết rơi, tay dang ra, dáng đứng giữa luồng sáng.",
    "Mắt lặng, tay buông thả, tuyết bay quanh tóc.",
    "Ánh nhìn xa, tay chống gậy, dáng đi giữa tuyết mênh mông.",
    "Cận mắt rực sáng, tay tạo hình nhạc, dáng hòa trong ánh sáng tuyết.",
    "Tay cầm cọ vẽ, mắt nhìn xa, đứng giữa khung cảnh trắng xóa.",
    "Ánh mắt chan chứa, tay đặt lên tim, dáng quay đi trong khung trời tuyết trắng."
  ],
  mua: ["Dưới cơn mưa đêm trên con phố vắng, cô gái mặc áo trench coat thanh lịch, cầm một chiếc ô trong suốt. Ánh đèn đường lấp lánh trên vũng nước, thần thái cô có chút suy tư, lãng mạn. Mái tóc uốn sóng nhẹ, môi son màu rượu vang.", "Ngồi một mình trong quán cafe cổ, cô mặc chiếc váy len màu kem, tay cầm một cuốn sách. Biểu cảm trầm ngâm, đôi mắt dõi theo những giọt mưa lăn dài trên cửa kính. Makeup tông nude, tóc tết lỏng.", "Trong chiếc áo mưa màu vàng chanh và đôi ủng cao su, cô gái nhảy múa, vui đùa dưới cơn mưa rào mùa hạ. Tóc ướt sũng nhưng nụ cười rạng rỡ, thần thái tinh nghịch, yêu đời.", "Chân dung cận mặt đầy cảm xúc. Một giọt nước mắt hòa cùng giọt mưa lăn dài trên gò má. Đôi mắt buồn, long lanh nhìn lên bầu trời xám xịt. Lớp makeup tối giản, nhấn vào đôi mắt ướt át.", "Hành động che đầu bằng một chiếc lá sen lớn, cô gái mặc áo bà ba, đi chân trần trên đường làng sau cơn mưa. Thần thái mộc mạc, gần gũi, nụ cười hiền hậu."],
  hoaanhdao: ["Mặc bộ kimono truyền thống màu hồng phấn, tóc búi cao cài trâm hoa tinh xảo. Thần thái dịu dàng, e ấp, cô đứng dưới một gốc cây anh đào cổ thụ, tay nhẹ nhàng chạm vào một cành hoa. Makeup trong veo, má ửng hồng đào.", "Trong chiếc váy trắng tinh khôi, mái tóc dài bay trong gió, cô gái tung những cánh hoa anh đào lên trời. Nụ cười hạnh phúc, thần thái tự do, như một nàng tiên giữa vườn hoa. Môi son hồng cam tươi tắn.", "Ngồi trên một chiếc xích đu gỗ, cô mặc bộ trang phục vintage, tay cầm một cuốn sách. Biểu cảm trầm tư, ánh mắt mơ màng nhìn những cánh hoa rơi. Tóc tết vương miện, makeup tông nâu cam.", "Chân dung beauty cận mặt, gương mặt được trang điểm với tông hồng đào trong veo. Vài cánh hoa anh đào được đính tinh tế lên gò má và mái tóc. Đôi mắt long lanh, to tròn.", "Mặc áo dài Việt Nam màu trắng, cô đi dạo trong một công viên đầy hoa anh đào. Phong thái trang nhã, thanh lịch, mái tóc đen dài buông xõa tự nhiên. Nụ cười nhẹ nhàng, thần thái cao quý."],
  hoaroi: ["Như một nàng thơ, cô gái mặc váy maxi voan trắng, đội vòng hoa dại trên đầu. Thần thái tự do, cô nhắm mắt và xoay một vòng giữa cơn mưa hoa hồng lãng mạn. Mái tóc dài uốn sóng, makeup tự nhiên.", "Nằm trên thảm cỏ xanh, xung quanh là những cánh hoa cúc họa mi trắng muốt. Cô mặc chiếc váy babydoll màu vàng nhạt, biểu cảm bình yên, đôi mắt trong veo nhìn lên bầu trời. Tóc tết hai bên.", "Bước xuống từ một cầu thang được rải đầy hoa mẫu đơn, cô mặc một chiếc váy dạ hội lộng lẫy. Thần thái sang trọng, quý phái, như một nữ hoàng. Tóc búi cao, trang điểm sắc sảo.", "Chân dung cận mặt đầy nghệ thuật. Gương mặt được trang điểm với những cánh hoa nhỏ li ti đính trên da. Mái tóc tết cầu kỳ, được trang trí bằng hoa tươi. Ánh mắt bí ẩn.", "Đứng trong một khu rừng huyền bí, cơn mưa hoa tử đằng tím biếc đang rơi xung quanh. Cô mặc trang phục tối màu, thần thái ma mị, quyến rũ. Môi son màu mận chín."],
  hoagiay: ["Trong căn phòng ngập tràn hoa giấy handmade đủ màu sắc, cô gái mặc chiếc váy bồng bềnh màu pastel. Thần thái ngọt ngào, dễ thương, cô ngồi giữa những bông hoa và mỉm cười rạng rỡ. Tóc buộc nửa đầu, kẹp nơ.", "Hành động thổi những bông hoa giấy nhỏ từ lòng bàn tay. Biểu cảm tinh nghịch, vui tươi. Cô mặc áo thun và quần yếm jean, trang điểm nhẹ nhàng, tàn nhang giả.", "Tạo dáng nghệ thuật giữa một bối cảnh toàn hoa giấy khổng lồ. Cô mặc một bộ trang phục avant-garde làm hoàn toàn từ giấy. Thần thái high-fashion, biểu cảm sắc lạnh.", "Chân dung cận mặt với mái tóc bob ngắn màu hồng khói. Gương mặt được trang điểm lấp lánh, tay cầm một bông hoa giấy tinh xảo che một bên mắt. Thần thái cá tính, hiện đại.", "Với biểu cảm tập trung và khéo léo, cô gái đang treo những chuỗi hoa giấy lên một cái cây trong khu vườn. Trang phục bohemian, tóc tết xương cá, thần thái yêu đời."],
  suongmu: ["Trong chiếc áo choàng có mũ trùm đầu, cô gái bước đi một mình trên con đường mòn xuyên qua khu rừng sương mù buổi sáng. Thần thái bí ẩn, cô độc. Không thấy rõ mặt, chỉ có bóng dáng.", "Đứng trên đỉnh núi, phía dưới là biển sương mù bao phủ. Cô mặc một chiếc váy dài màu trắng, mái tóc bay trong gió. Biểu cảm trầm mặc, phóng tầm mắt ra xa.", "Như một tiên nữ lạc trong cõi mộng, cô mặc chiếc váy lụa mỏng manh, đứng bên một hồ nước phẳng lặng. Sương mù giăng kín mặt hồ, thần thái thoát tục, mái tóc buông xõa.", "Chân dung cận mặt, vài giọt sương tinh khôi đọng trên hàng mi cong vút. Ánh mắt trong veo, có chút ngơ ngác. Làn da căng bóng, makeup tự nhiên như không.", "Chèo thuyền độc mộc trên sông vào buổi sớm, xung quanh là sương mù giăng kín mặt nước. Thần thái tĩnh lặng, an nhiên. Cô mặc trang phục giản dị, tóc búi cao gọn gàng."],
  may: ["Mặc chiếc váy trắng bồng bềnh như mây, tóc uốn xoăn nhẹ, cô gái ngồi trên một đám mây xốp mịn giữa trời xanh. Thần thái mơ màng, như đang trong một giấc mơ. Makeup tông đào, má ửng hồng.", "Dang rộng hai tay như đang bay lượn giữa những tầng mây lúc hoàng hôn. Biểu cảm tự do, hạnh phúc. Trang phục thoải mái, năng động. Ánh hoàng hôn chiếu rọi lên mái tóc.", "Đứng trên một ban công nhìn ra thành phố trên mây. Cô mặc trang phục phi hành gia cách điệu, mái tóc màu bạc. Thần thái tương lai, mạnh mẽ. Makeup kim loại, sắc sảo.", "Chân dung cận mặt, cô gái đang thổi một đám mây nhỏ trên tay. Gương mặt ngây thơ, trong sáng, trang điểm tông màu pastel. Đôi mắt to tròn, lấp lánh.", "Hành động câu cá từ trên một đám mây, nhưng thay vì cá, cô lại câu được những ngôi sao lấp lánh. Trang phục cổ tích, thần thái kỳ ảo, nụ cười tinh nghịch."],
  la: ["Trong chiếc áo len cổ lọ màu cam đất và quần culottes, cô gái tung lá vàng mùa thu lên trời và cười tươi. Thần thái ấm áp, vui vẻ. Mái tóc ngắn ngang vai, makeup tông cam đất.", "Ngồi trên ghế dài trong công viên, cô mặc áo khoác dáng dài, chăm chú đọc sách. Xung quanh là con đường trải đầy lá phong đỏ. Biểu cảm suy tư, tri thức. Tóc búi gọn.", "Chân dung một nữ thần rừng mùa thu. Cô mặc một chiếc váy làm từ lá cây thật, mái tóc được kết từ những cành khô. Thần thái quyền lực, huyền bí. Makeup tông màu đất, nhấn vào đôi mắt.", "Hành động thu thập những chiếc lá đẹp nhất để ép vào sổ tay. Cô mặc trang phục giản dị, ngồi trên thảm cỏ. Biểu cảm chăm chú, say mê. Kính gọng tròn, tóc tết đuôi sam.", "Cận cảnh đôi chân đi bốt da cao cổ đang bước đi trên thảm lá khô xào xạc. Phía xa là bóng dáng cô gái đang đi về phía trước. Bố cục mang tính kể chuyện."],
  tim: ["Trước sự ngạc nhiên và hạnh phúc, hàng trăm trái tim 3D màu hồng và đỏ bay xung quanh cô gái. Cô mặc chiếc váy hồng xòe, thần thái đáng yêu. Mái tóc buộc đuôi ngựa cao, makeup ngọt ngào.", "Mặc trang phục hiện đại, cá tính, cô đang dùng tay bắt lấy một trái tim neon đang phát sáng trong không gian tối. Thần thái cool ngầu, bí ẩn. Tóc nhuộm màu nổi bật, khuyên tai cá tính.", "Chân dung beauty cận mặt, gương mặt được trang điểm lấp lánh với hình trái tim nhỏ gần mắt. Mái tóc nhuộm highlight hồng. Biểu cảm tinh nghịch, ngọt ngào, đang nháy mắt.", "Hành động thả một quả bóng bay hình trái tim khổng lồ lên bầu trời. Cô mặc trang phục đơn giản, đứng trên một cánh đồng. Ánh mắt dõi theo quả bóng đầy hy vọng.", "Cận cảnh đôi tay đang chắp lại thành hình trái tim, qua đó lấy nét vào nụ cười rạng rỡ của cô ấy. Lớp sơn móng tay màu đỏ, có hình trái tim nhỏ."],
  kimtuyen: ["Đứng dưới một cơn mưa kim tuyến vàng rơi, cô gái mặc một chiếc váy dạ hội sequin lấp lánh. Thần thái quyến rũ, sang trọng, như một ngôi sao. Tóc búi cao, môi son đỏ đậm.", "Nhảy múa một cách tự do trong căn phòng đầy kim tuyến và ánh đèn disco. Cô mặc trang phục tiệc tùng sành điệu. Thần thái vui vẻ, tràn đầy năng lượng. Tóc xù hippie.", "Hành động thổi một nắm kim tuyến từ lòng bàn tay về phía ống kính. Nụ cười rạng rỡ, ánh mắt lấp lánh. Trang phục đơn giản để làm nổi bật kim tuyến. Makeup glowy.", "Chân dung beauty cận mặt, gương mặt được trang điểm theo phong cách 'galaxy' với kim tuyến và nhũ bạc trên gò má và bầu mắt. Đôi mắt nhắm hờ, biểu cảm mơ màng.", "Nửa gương mặt được che bởi một chiếc mặt nạ hóa trang đính kim tuyến cầu kỳ. Thần thái bí ẩn, mê hoặc. Đôi mắt sắc sảo nhìn thẳng vào ống kính."],
  phaohoa: ["Đứng trên cầu, cô gái mặc áo dài truyền thống, tóc dài buông xõa. Thần thái dịu dàng, cô ngắm nhìn màn pháo hoa rực rỡ đêm giao thừa. Ánh sáng pháo hoa chiếu rọi lên gương mặt.", "Mặc váy dạ hội lộng lẫy, cô đứng trên sân thượng một tòa nhà chọc trời, nâng ly rượu vang chúc mừng. Phía sau là bầu trời đêm rực rỡ pháo hoa. Thần thái sang trọng, thành đạt.", "Chân dung cận mặt với biểu cảm kinh ngạc và vui sướng. Đôi mắt mở to, trong veo, phản chiếu những chùm pháo hoa nhiều màu sắc. Nụ cười hạnh phúc không thể che giấu.", "Cặp đôi đang trao nhau nụ hôn ngọt ngào dưới trời pháo hoa. Ánh sáng lãng mạn chiếu rọi lên hai người. Khoảnh khắc đầy tình yêu và hạnh phúc.", "Tay cầm một cây pháo bông đang cháy, những tia lửa nhỏ phản chiếu trong đôi mắt long lanh của cô gái. Biểu cảm hạnh phúc, nụ cười ấm áp. Trang phục len mùa đông."],
  bongbong: ["Trong công viên ngập nắng, cô gái mặc yếm jean và áo thun trắng, đang thổi những quả bong bóng xà phòng. Thần thái ngây thơ, trong sáng. Mái tóc tết hai bên, má có tàn nhang giả.", "Ngồi thư giãn trong một bồn tắm đầy bọt và bong bóng xà phòng. Biểu cảm vui vẻ, thoải mái. Tóc quấn khăn tắm, vai trần gợi cảm.", "Đứng giữa một căn phòng được trang trí bằng hàng trăm quả bóng bay màu pastel. Cô mặc một chiếc váy công chúa, biểu cảm như đang lạc vào một giấc mơ. Tóc uốn xoăn bồng bềnh.", "Chân dung nghệ thuật cận mặt. Một quả bong bóng xà phòng lớn trong suốt che gần hết gương mặt, tạo hiệu ứng khúc xạ độc đáo. Ánh mắt nhìn xuyên qua quả bong bóng.", "Tạo dáng high-fashion với một chiếc váy avant-garde làm từ chất liệu trong suốt giống bong bóng. Thần thái sắc lạnh, chuyên nghiệp. Bối cảnh tối giản để làm nổi bật trang phục."]
};

export const HANDHELD_ITEMS = [
    "một đóa hoa hồng nhung đỏ thắm", "một chiếc ô trong suốt", "một cây quạt giấy cổ trang", "đội một chiếc nón lá truyền thống", "một cuốn sách cũ bìa da", "một tách trà nóng bốc khói", "một chiếc máy ảnh vintage", "một quả cầu pha lê", "một cây đàn guitar gỗ", "một chiếc mặt nạ hóa trang", "cầm một ngọn nến lung linh", "một chiếc lồng đèn Hội An", "một thanh kiếm katana sắc bén", "một chiếc kẹo mút cầu vồng", "một chùm bong bóng bay", "một chiếc nón len ấm áp", "một chiếc khăn choàng cổ dài", "một bức tranh vẽ dở", "một chiếc điện thoại thông minh", "một ly cocktail nhiệt đới", "một chiếc vali du lịch", "một quả táo đỏ mọng", "một chiếc headphone sành điệu", "một chiếc ván trượt skateboard", "một chú gấu bông dễ thương", "một chiếc máy tính xách tay", "một cây bút và sổ tay", "một chiếc bánh cupcake xinh xắn", "một chiếc kính râm thời trang", "một chai nước khoáng", "một chiếc la bàn cổ", "một bản đồ cũ", "một chiếc vợt tennis", "một quả bóng rổ", "một chiếc gậy phép thuật", "một bó hoa dại", "một chiếc giỏ mây", "một chiếc bánh mì baguette", "một chiếc máy chơi game cầm tay", "một chiếc máy bay giấy", "một chiếc diều sặc sỡ", "một chiếc nhẫn kim cương lấp lánh", "một chiếc vòng tay bạc", "một chiếc đồng hồ đeo tay cổ điển", "một đôi găng tay da", "một chiếc ví tiền", "một chiếc chìa khóa cổ", "một lá bài tarot", "một viên đá quý", "một chiếc lông vũ"
];

export const BACKGROUNDS = [
    "trên một đỉnh núi hùng vĩ lúc bình minh", "trong một khu rừng tre xanh mướt", "giữa một cánh đồng hoa oải hương bất tận", "trên một bãi biển nhiệt đới với cát trắng và biển xanh", "trong một con hẻm nhỏ ở Hội An với đèn lồng rực rỡ", "trên sân thượng một tòa nhà chọc trời ở New York", "trong một thư viện cổ kính với hàng ngàn cuốn sách", "tại một ga tàu hơi nước cổ điển", "giữa một khu chợ đêm nhộn nhịp ở Thái Lan", "trong một cung điện hoàng gia tráng lệ", "bên cạnh một hồ nước pha lê trong xanh", "trên một cây cầu treo lơ lửng giữa thung lũng", "trong một ngôi đền cổ ở Kyoto, Nhật Bản", "giữa một sa mạc cát mênh mông lúc hoàng hôn", "trong một khu vườn hoàng gia kiểu Pháp", "trên một con phố ngập tràn ánh đèn neon ở Tokyo", "bên trong một nhà kính thực vật khổng lồ", "giữa một lễ hội carnival rực rỡ sắc màu", "trên một du thuyền sang trọng giữa đại dương", "trong một phòng trà đạo truyền thống của Nhật", "dưới một bầu trời đầy sao và dải ngân hà", "trong một hang động băng tuyết kỳ ảo", "trên một con đường làng quê yên bình", "tại một quảng trường ở Châu Âu cổ kính", "bên trong một viện bảo tàng nghệ thuật hiện đại", "giữa một cánh đồng lúa chín vàng ươm", "trên một vách đá nhìn ra biển cả", "trong một ngôi nhà gỗ ấm cúng giữa rừng", "tại một lễ hội đèn trời ở Chiang Mai", "bên một dòng sông băng ở Iceland", "trong một khu phố cổ với kiến trúc độc đáo", "giữa một vườn quốc gia hoang dã", "trên một con thuyền gondola ở Venice", "trong một lâu đài cổ tích ở Đức", "tại một quán cafe vỉa hè ở Paris", "dưới một cây cầu cổ kính", "trong một khu vui chơi giải trí đầy màu sắc", "giữa một cánh đồng hoa hướng dương", "trên một con tàu vũ trụ nhìn ra Trái Đất", "trong một phòng thí nghiệm khoa học tương lai", "tại một buổi hòa nhạc rock sôi động", "bên một ngọn hải đăng sừng sững", "trong một khu rừng nhiệt đới rậm rạp", "trên một con đường mòn đi bộ xuyên rừng", "tại một trường đua ngựa", "bên trong một nhà hát opera lộng lẫy", "giữa một cánh đồng chè xanh bát ngát", "trên một hòn đảo hoang vắng", "trong một khu ổ chuột cyberpunk", "tại một tu viện trên núi cao"
];

export const LOCATIONS = [
    "Vịnh Hạ Long, Việt Nam", "Santorini, Hy Lạp", "Kyoto, Nhật Bản", "Paris, Pháp", "Rome, Ý", "Bora Bora, French Polynesia", "New York City, Mỹ", "Machu Picchu, Peru", "Maldives", "Venice, Ý", "Prague, Cộng hòa Séc", "London, Anh", "Bagan, Myanmar", "Great Barrier Reef, Úc", "Cairo, Ai Cập", "Cappadocia, Thổ Nhĩ Kỳ", "Banff National Park, Canada", "Iceland", "Rio de Janeiro, Brazil", "Petra, Jordan", "Thác Iguazu, Argentina/Brazil", "Angkor Wat, Campuchia", "Vạn Lý Trường Thành, Trung Quốc", "Serengeti National Park, Tanzania", "New Zealand", "Amsterdam, Hà Lan", "Barcelona, Tây Ban Nha", "Dubai, UAE", "Moscow, Nga", "Havana, Cuba", "Lisbon, Bồ Đào Nha", "Seoul, Hàn Quốc", "Bangkok, Thái Lan", "Singapore", "Sydney, Úc", "Edinburgh, Scotland", "Vienna, Áo", "Budapest, Hungary", "Jaipur, Ấn Độ", "Marrakech, Morocco", "Cánh đồng muối Salar de Uyuni, Bolivia", "Quần đảo Galapagos, Ecuador", "Thác Victoria, Zambia/Zimbabwe", "Rừng Amazon", "Antarctica", "Hồ Louise, Canada", "Thung lũng Monument, Mỹ", "Florence, Ý", "Dubrovnik, Croatia", "Zermatt, Thụy Sĩ"
];
