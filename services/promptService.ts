
import { PromptParams } from '../types';

// Helper function to check if a layout is multi-image
const isMultiImageLayout = (layoutPrompt: string): boolean => {
  // Check for numbers 2-9 or keywords indicating multiple images
  const multiImageRegex = /[2-9]|nhiều ảnh|lưới|zic-zắc|dải|bộ ba|so sánh/i;
  return multiImageRegex.test(layoutPrompt);
};


export const generateDetailedPrompt = (params: PromptParams): string => {
  const { concept, style, layout, customPrompt, outfits, items, backgrounds, locations } = params;

  // This function constructs a hyper-detailed prompt for the AI
  const promptParts = [
    // --- CONTEXT & SCENE ---
    `**Bối cảnh chính:** Một bức ảnh nghệ thuật cao cấp chụp một người (${customPrompt ? customPrompt : 'một cô gái xinh đẹp'}).`,
    `**Yếu tố chủ đạo:** ${concept.promptFragment}.`,
    `**Phong cách nghệ thuật:** ${style.promptFragment}.`,
  ];

  // --- SPECIAL RULE FOR 'TUYET' + 'NGHETHUAT' ---
  if (concept.id === 'tuyet' && style.id === 'nghethuat') {
    promptParts.push(
      `**YÊU CẦU ĐẶC BIỆT (Tuyết Rơi + Nghệ Thuật):** Đây là yêu cầu tạo ra một kiệt tác. Mọi yếu tố từ trang phục, bối cảnh, trang điểm, phụ kiện phải được kết hợp một cách hoàn hảo, tạo ra một tổng thể nghệ thuật đỉnh cao, sang trọng và đẳng cấp nhất. Mọi chi tiết phải toát lên vẻ đẹp chuyên nghiệp, pro, và cực kỳ ấn tượng.`
    );
  }
  
  // --- COMPOSITION ---
  promptParts.push(`**Bố cục & Phân cảnh:** ${layout.promptFragment}`);


  // --- OUTFIT ---
  if (outfits && outfits.length > 0) {
    promptParts.push(`**Trang phục & Phụ kiện:** ${outfits.join(', ')}.`);
  }

  // --- DYNAMIC INSTRUCTION FOR MULTI-IMAGE LAYOUTS ---
  if (isMultiImageLayout(layout.promptFragment)) {
    promptParts.push(
      `**YÊU CẦU ĐA DẠNG HÓA GÓC CHỤP & TẠO DÁNG (QUAN TRỌNG):**`,
      `- **Nhiếp ảnh chuyên nghiệp:** Mỗi ảnh nhỏ trong bố cục phải là một khoảnh khắc độc đáo, được chụp ở một góc máy và một kiểu tạo dáng hoàn toàn khác nhau.`,
      `- **Đa dạng góc máy:** Bắt buộc phải có sự đa dạng về góc chụp như: góc trực diện, góc nghiêng 45 độ, góc chụp từ sau lưng, góc cận mặt (face close-up), góc bán thân (medium shot), góc toàn thân (full shot). Luôn chọn những góc máy đẹp và tôn dáng nhân vật nhất.`,
      `- **Đa dạng tạo dáng:** Nhân vật phải thay đổi biểu cảm và tư thế trong mỗi ảnh để tạo sự sống động và kể chuyện.`,
      `- **Đồng nhất trang phục (QUAN TRỌNG):** Nhân vật phải mặc CÙNG MỘT BỘ TRANG PHỤC, phụ kiện và kiểu trang điểm trong TẤT CẢ các ảnh nhỏ. Chỉ thay đổi góc chụp và tư thế.`,
      `- **Trang phục:** Phải là bộ trang phục đẹp nhất, tinh tế và hoàn toàn phù hợp với concept và bối cảnh đã chọn.`
    );
  }
  
  // --- ADDITIONAL DETAILS ---
  const additionalDetails = [...items, ...backgrounds, ...locations];
  if (additionalDetails.length > 0) {
      promptParts.push(`**Chi tiết bổ sung:** ${additionalDetails.join(', ')}.`);
  }

  // --- TECHNICAL SPECIFICATIONS ---
  promptParts.push(
    `**Chất lượng hình ảnh TUYỆT ĐỐI:**`,
    `- **Độ phân giải:** 8K Ultra-HD, siêu sắc nét, không nhiễu, không mờ.`,
    `- **Độ chi tiết vi mô (Micro-detail):** Da người phải có kết cấu tự nhiên, nhìn rõ lỗ chân lông. Tóc phải rõ từng sợi. Mắt phải có hồn và long lanh.`,
    `- **Chân thực:** Kết cấu vật liệu (vải, da, kim loại) phải siêu thực.`
  );
    
  // --- CAMERA & LENS SIMULATION ---
  promptParts.push(
    `**Thiết lập máy ảnh:**`,
    `- **Máy ảnh:** Mô phỏng máy ảnh full-frame 200MP đắt tiền nhất thế giới (ví dụ: Phase One XF IQ4).`,
    `- **Ống kính:** Sử dụng ống kính có độ mở lớn như f/1.2 để tạo hiệu ứng xóa phông mềm mại, đẹp mắt (ví dụ: Canon RF 85mm f/1.2).`,
    `- **Focus:** **Lấy nét siêu sắc nét chính xác tuyệt đối vào khuôn mặt nhân vật, đặc biệt là tròng mắt và lông mi.**`
  );

  // --- LIGHTING ---
  promptParts.push(
    `**Thiết lập ánh sáng:**`,
    `- **Ánh sáng:** Ánh sáng điện ảnh khuếch tán mềm mại (soft diffused cinematic light).`,
    `- **Chi tiết ánh sáng:** Có "catchlight" (đốm sáng phản chiếu) rõ ràng trong mắt nhân vật để tạo chiều sâu và sự sống động.`,
    `- **Phông nền:** Phông nền gradient màu pastel hoặc phù hợp với bối cảnh nhưng được làm mờ một cách nghệ thuật.`
  );

  // --- FINAL INSTRUCTION ---
  promptParts.push(
    `**Yêu cầu BẮT BUỘC (FACELOCK 100%):** Giữ nguyên tuyệt đối gương mặt, nhận dạng (ID), tỉ lệ mắt–mũi–miệng, kiểu tóc, và tông da tự nhiên từ ảnh mẫu. Tạo ra một kiệt tác nhiếp ảnh chân thực, đẹp xuất sắc, và có hồn.`
  );

  return promptParts.join(' ');
};
