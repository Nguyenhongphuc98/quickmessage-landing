/**
 * QuickMessage Landing Page - Main Script
 * Supports:
 * - Bilingual (English default, Vietnamese)
 * - Default prefix: '\' (backslash)
 * - Interactive Hero macOS Simulation
 * - Live Playground with '\' trigger detection
 * - FAQ Accordion & Smooth Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNavbar();
  initHeroDemo();
  initPlayground();
  initFaqAccordion();
});

/* ==========================================================================
   1. Internationalization (i18n) - English Default & Vietnamese
   ========================================================================== */
let currentLang = 'en';

const translations = {
  en: {
    'page.title': 'QuickMessage — Native Text Expander for macOS',
    'page.description': 'A blazing-fast native text expander for macOS. Expand shortcuts into full text instantly with 100% private local processing, encrypted iCloud sync, lightweight memory footprint and zero background battery drain.',
    'page.keywords': 'text expander mac, macos text expander, mac text replacement, snippet manager mac, shortcut expander mac, typing accelerator mac, auto text expander, offline text expander, private text expander, icloud snippet sync, native mac productivity app, mac keyboard shortcuts, quick message mac',
    'nav.experience': 'Experience',
    'nav.playground': 'Live Playground',
    'nav.privacy': 'Privacy',
    'nav.sync': 'iCloud Sync',
    'nav.performance': 'Performance',
    'nav.faq': 'FAQ',
    'nav.download': 'Download for Mac',

    'hero.badge': 'Next-generation native text expander for macOS',
    'hero.title': 'Type Less.<br><span class="gradient-blue">Work Faster. Save Time.</span>',
    'hero.desc': 'QuickMessage instantly expands shortcuts like <code class="trigger-highlight">\\bank</code>, <code class="trigger-highlight">\\email</code>, <code class="trigger-highlight">\\sig</code> into complete text in Telegram, Apple Mail, Slack, Notion, or any app you use.',
    'hero.btn.download': 'Download QuickMessage for Mac',
    'hero.btn.try': 'Try Live Interactive Demo',

    'showcase.tab.chat': '💬 Chat (Bank Info)',
    'showcase.tab.mail': '✉️ Mail (Auto Reply)',
    'showcase.tab.sig': '✍️ Signature',
    'showcase.tab.dev': '💻 Terminal / Dev',
    'showcase.replay': 'Replay',
    'showcase.pause': 'Pause',
    'showcase.resume': 'Resume',

    'play.tag': 'LIVE PLAYGROUND',
    'play.title': 'Try QuickMessage Keystroke Expansion',
    'play.desc': 'Type <code class="trigger-highlight">\\</code> or click the shortcuts below to experience instant snippet suggestions.',
    'play.quick_label': 'QUICK SHORTCUTS:',
    'play.placeholder': 'Click here and type \\bank or \\sig...',
    'play.status.initial': 'Type \\ to trigger instant snippet completion...',
    'play.status.found': 'Found {n} matching snippet(s). Press Enter or click to insert.',
    'play.hint': 'Use Arrow keys & Enter to quickly select',

    'privacy.tag': 'ABSOLUTE PRIVACY & SECURITY',
    'privacy.title': '"Your data never leaves your device."',
    'privacy.desc': 'QuickMessage is designed privacy-first from the ground up. No tracking servers, no cloud keystroke logging, and zero content telemetry.',
    'privacy.card1.title': '100% Local Processing',
    'privacy.card1.desc': 'All shortcut expansions are processed entirely in memory on your Mac. Everything runs 100% offline with zero external network requests.',
    'privacy.card2.title': 'Zero Data Collection',
    'privacy.card2.desc': 'Zero telemetry. The app never records keystrokes (no keylogging), does not track typing behavior, and contains no third-party tracking SDKs.',
    'privacy.card3.title': 'Apple Keychain Security',
    'privacy.card3.desc': 'Your local database is fully secured. The encryption key is randomly generated upon install and stored securely inside your macOS Keychain.',

    'sync.tag': 'APPLE CLOUD SYNC',
    'sync.title': 'Instant synchronization via your personal Apple iCloud.',
    'sync.desc': 'All your snippets and shortcuts sync automatically between your MacBook, Mac mini, and iMac using Apple CloudKit.',
    'sync.item1': '<strong>No secondary account or password needed:</strong> Automatically authenticated via your signed-in Apple ID on macOS.',
    'sync.item2': '<strong>End-to-End Encrypted:</strong> Your data resides strictly in your personal iCloud Private Database. Nobody else can ever access it.',
    'sync.item3': '<strong>Seamless real-time updates:</strong> Add a snippet on your work MacBook, and it is immediately available on your home iMac.',
    'sync.synced': 'Synced',
    'sync.private': 'Private DB',

    'perf.tag': 'NATIVE PERFORMANCE',
    'perf.title': 'Ultra-Lightweight. Instant Response.',
    'perf.desc': 'Engineered natively for macOS. Zero bloat, zero background lag, and zero battery drain.',
    'perf.m1.lbl': 'Memory Footprint',
    'perf.m1.sub': 'Uses over 90% less RAM than typical desktop apps',
    'perf.m2.lbl': 'Response Time',
    'perf.m2.sub': 'Instant snippet expansion under every keystroke',
    'perf.m3.lbl': 'Idle CPU Usage',
    'perf.m3.sub': 'Completely silent in the background. Never drains battery.',
    'perf.m4.lbl': 'Native Architecture',
    'perf.m4.sub': 'Designed exclusively for macOS Sonoma, Sequoia & Apple Silicon / Intel.',
    'perf.arch.title': 'Native macOS Architecture',
    'perf.arch.desc': 'QuickMessage runs silently in the background with zero impact on system responsiveness or battery life, delivering instantaneous text expansion whenever you type.',
    'perf.tag1': 'Zero Background Lag',
    'perf.tag2': 'Ultra-Low Memory',
    'perf.tag3': 'Apple Silicon & Intel Ready',
    'perf.comp1.name': 'QuickMessage',
    'perf.comp2.name': 'Typical desktop text expanders',

    'feat.tag': 'BUILT FOR PRODUCTIVITY',
    'feat.title': 'Designed for Keyboard Lovers',
    'feat.desc': 'Perform every action at lightning speed without lifting your hands from the keyboard.',
    'feat.spotlight.placeholder': 'Type \\ to search snippets...',
    'feat.mgr.title': 'Refined Native macOS Manager',
    'feat.mgr.desc': 'Effortlessly organize snippet categories, customize keywords, configure dynamic variables, and export JSON backups in seconds.',

    'cases.tag': 'PRACTICAL USE CASES',
    'cases.title': 'Save Hours of Repetitive Typing',
    'cases.desc': 'Perfect for professionals who value speed, accuracy, and workflow efficiency.',
    'cases.c1.title': 'Sales & Customer Support',
    'cases.c1.desc': 'No more opening banking apps to copy account numbers, retyping shipping policies or store addresses. Send instantly in 1 second.',
    'cases.c2.title': 'Office, Recruiting & Management',
    'cases.c2.desc': 'Compose formal emails, send interview invites, weekly progress reports, and meeting summaries with dynamic autofill fields.',
    'cases.c3.title': 'Developers & IT Support',
    'cases.c3.desc': 'Store complex docker commands, nginx configurations, standard conventional commits, cURL endpoints, and frequent SQL queries.',
    'cases.c4.title': 'Freelancers & Creators',
    'cases.c4.desc': 'Instantly send service rates, social media links, portfolio URLs, invoice details, and standard contract agreements.',

    'faq.tag': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How does QuickMessage work on macOS?',
    'faq.a1': 'QuickMessage runs discreetly in the macOS Menu Bar. When you type the default prefix <code>\\</code> followed by your configured shortcut, a lightweight overlay appears or instantly replaces your text directly at your cursor position.',
    'faq.q2': 'Why does the app require Accessibility permission?',
    'faq.a2': 'macOS requires Accessibility permissions for all text expanders to detect global shortcut triggers across other apps and inject expanded text into your active window. QuickMessage processes 100% of keystroke matches locally and never logs or transmits any data.',
    'faq.q3': 'Does data sync across my Mac devices?',
    'faq.a3': 'Yes! QuickMessage synchronizes snippets through your private Apple iCloud (CloudKit). Your data is encrypted and stored strictly in your own iCloud Private Database without any intermediate servers.',
    'faq.q4': 'Which Mac computers are supported?',
    'faq.a4': 'QuickMessage runs natively on both Apple Silicon (M1, M2, M3, M4) and Intel Macs, fully supporting macOS 12 (Monterey), macOS 13 (Ventura), macOS 14 (Sonoma), and macOS 15 (Sequoia).',

    'cta.title': 'Ready to Accelerate Your Typing?',
    'cta.desc': 'Download QuickMessage and start saving hours of repetitive typing every week.',
    'cta.btn': 'Download QuickMessage for Mac',
    'cta.sub': 'Compatible with macOS 12+ • Apple Silicon & Intel • Instant setup',

    'footer.brand.desc': 'Next-generation smart text expander for macOS. Boost productivity, eliminate repetitive typing, and keep your data 100% private.',
    'footer.col1': 'Features',
    'footer.col2': 'Security',
    'footer.col3': 'Platform',
    'footer.cpr1': '© 2026 QuickMessage for macOS. Designed with ❤️ for Mac enthusiasts.',
    'footer.cpr2': 'Zero tracking, zero ads, zero data collection.'
  },
  vi: {
    'page.title': 'QuickMessage — Ứng Dụng Gõ Tắt Native Cho macOS',
    'page.description': 'Ứng dụng gõ tắt native hàng đầu cho macOS. Gõ ít hơn, tiết kiệm thời gian hơn. 100% xử lý cục bộ offline, bảo mật tuyệt đối, đồng bộ iCloud riêng tư, siêu nhẹ và phản hồi tức thì.',
    'page.keywords': 'gõ tắt mac, gõ tắt macos, ứng dụng gõ tắt mac, phần mềm gõ tắt macbook, mở rộng văn bản mac, quản lý snippet mac, gõ nhanh macos, text expander mac tieng viet, tự động điền văn bản macbook, gõ tắt offline mac, gõ tắt bảo mật icloud',
    'nav.experience': 'Trải nghiệm',
    'nav.playground': 'Thử nghiệm trực tiếp',
    'nav.privacy': 'Quyền riêng tư',
    'nav.sync': 'iCloud Sync',
    'nav.performance': 'Hiệu năng Native',
    'nav.faq': 'Hỏi đáp',
    'nav.download': 'Tải cho macOS',

    'hero.badge': 'Ứng dụng gõ tắt native thế hệ mới cho macOS 12+',
    'hero.title': 'Gõ ít hơn.<br><span class="gradient-blue">Nhanh hơn và tiết kiệm thời gian.</span>',
    'hero.desc': 'QuickMessage biến các từ khoá viết tắt ngắn như <code class="trigger-highlight">\\bank</code>, <code class="trigger-highlight">\\email</code>, <code class="trigger-highlight">\\sig</code> thành đoạn văn bản hoàn chỉnh ngay trong Telegram, Apple Mail, Notion, Slack hoặc bất kỳ ứng dụng nào bạn đang dùng.',
    'hero.btn.download': 'Tải QuickMessage cho Mac',
    'hero.btn.try': 'Thử Nghiệm Trực Tiếp',

    'showcase.tab.chat': '💬 Chat (STK Ngân hàng)',
    'showcase.tab.mail': '✉️ Mail (Mẫu phản hồi)',
    'showcase.tab.sig': '✍️ Chữ ký tức thì',
    'showcase.tab.dev': '💻 Terminal / Dev',
    'showcase.replay': 'Xem lại',
    'showcase.pause': 'Tạm dừng',
    'showcase.resume': 'Tiếp tục',

    'play.tag': 'TRẢI NGHIỆM THỰC TẾ',
    'play.title': 'Thử Ngay Bàn Phím QuickMessage',
    'play.desc': 'Gõ từ khoá <code class="trigger-highlight">\\</code> hoặc bấm vào các nút bên dưới để trải nghiệm tốc độ gợi ý tức thì.',
    'play.quick_label': 'GỢI Ý TỪ KHOÁ NHANH:',
    'play.placeholder': 'Nhấp vào đây và gõ \\bank hoặc \\sig...',
    'play.status.initial': 'Gõ \\ để thử nghiệm tính năng gợi ý tức thì...',
    'play.status.found': 'Tìm thấy {n} snippet phù hợp. Bấm Enter hoặc Click để chèn.',
    'play.hint': 'Sử dụng phím mũi tên & Enter để chọn nhanh',

    'privacy.tag': 'BẢO MẬT & QUYỀN RIÊNG TƯ TUYỆT ĐỐI',
    'privacy.title': '"Dữ liệu không bao giờ rời khỏi thiết bị của bạn."',
    'privacy.desc': 'QuickMessage được thiết kế từ gốc với tư duy Privacy-First. Không máy chủ theo dõi, không gửi phím bấm lên đám mây, không thu thập bất kỳ nội dung văn bản nào của bạn.',
    'privacy.card1.title': '100% Xử Lý Cục Bộ',
    'privacy.card1.desc': 'Mọi thao tác nhận diện phím tắt được xử lý trực tiếp trên bộ nhớ máy Mac. Toàn bộ quá trình diễn ra hoàn toàn offline.',
    'privacy.card2.title': 'Không Thu Thập Dữ Liệu',
    'privacy.card2.desc': 'Zero Telemetry. Ứng dụng không ghi log phím bấm (no keylogging), không theo dõi hành vi gõ văn bản và không chứa bất kỳ SDK phân tích dữ liệu nào từ bên thứ ba.',
    'privacy.card3.title': 'Mã Hoá Apple Keychain',
    'privacy.card3.desc': 'Cơ sở dữ liệu cục bộ được bảo vệ chặt chẽ. Khoá bảo mật được sinh ngẫu nhiên khi cài đặt và lưu trữ trực tiếp trong macOS Keychain của bạn.',

    'sync.tag': 'ĐỒNG BỘ ĐÁM MÂY APPLE',
    'sync.title': 'Đồng bộ tức thì qua iCloud cá nhân của bạn.',
    'sync.desc': 'Tất cả đoạn văn bản và phím tắt của bạn được đồng bộ tự động giữa MacBook, Mac mini và iMac thông qua nền tảng Apple CloudKit cá nhân.',
    'sync.item1': '<strong>Không cần tài khoản phụ hay mật khẩu mới:</strong> Tự động nhận diện tài khoản Apple ID đang đăng nhập trên máy Mac của bạn.',
    'sync.item2': '<strong>Mã hoá đầu cuối (End-to-End Encrypted):</strong> Dữ liệu nằm hoàn toàn trong Private Database trên iCloud của bạn. Không ai khác có thể truy cập được.',
    'sync.item3': '<strong>Cập nhật thời gian thực không độ trễ:</strong> Thêm mới một snippet trên MacBook ở văn phòng, nó lập tức sẵn sàng trên iMac ở nhà.',
    'sync.synced': 'Đã đồng bộ',
    'sync.private': 'Private DB',

    'perf.tag': 'HIỆU NĂNG NATIVE',
    'perf.title': 'Nhẹ Như Lông Vũ. Phản Hồi Tức Thì.',
    'perf.desc': 'Tối ưu hóa nguyên bản cho macOS. Không tốn tài nguyên, không độ trễ, không hao pin.',
    'perf.m1.lbl': 'Bộ nhớ RAM sử dụng',
    'perf.m1.sub': 'Tiết kiệm 90% RAM so với các ứng dụng thông thường',
    'perf.m2.lbl': 'Độ trễ nhận diện',
    'perf.m2.sub': 'Phản hồi tức thì ngay khi hoàn thành từ khoá',
    'perf.m3.lbl': 'Mức tiêu thụ CPU nhàn rỗi',
    'perf.m3.sub': 'Hoàn toàn êm ái, không làm nóng máy hay hao pin',
    'perf.m4.lbl': 'Kiến Trúc Native',
    'perf.m4.sub': 'Tương thích hoàn hảo Apple Silicon & Intel Mac',
    'perf.arch.title': 'Kiến Trúc Tối Ưu Cho macOS',
    'perf.arch.desc': 'QuickMessage chạy ngầm êm ái mà không ảnh hưởng tới hiệu năng hệ thống hay thời lượng pin, mở rộng văn bản tức thì ngay khi bạn gõ.',
    'perf.tag1': 'Không độ trễ',
    'perf.tag2': 'Siêu nhẹ bộ nhớ',
    'perf.tag3': 'Tối ưu cho Mac',
    'perf.comp1.name': 'QuickMessage',
    'perf.comp2.name': 'Các ứng dụng thông thường',

    'feat.tag': 'TRẢI NGHIỆM ĐỈNH CAO',
    'feat.title': 'Thiết Kế Cho Người Yêu Bàn Phím',
    'feat.desc': 'Mọi thao tác đều có thể thực hiện với vận tốc ánh sáng mà không cần nhấc tay rời khỏi bàn phím.',
    'feat.spotlight.placeholder': 'Gõ \\ để tìm kiếm nhanh...',
    'feat.mgr.title': 'Giao Diện Quản Trị Tinh Tế Chuẩn macOS',
    'feat.mgr.desc': 'Dễ dàng tổ chức danh mục snippet, tuỳ chỉnh từ khoá, cấu hình biến động và sao lưu dữ liệu JSON chỉ trong tích tắc.',

    'cases.tag': 'ỨNG DỤNG THỰC TẾ',
    'cases.title': 'Giải Phóng Bạn Khỏi Sự Lặp Lại',
    'cases.desc': 'Phù hợp hoàn hảo cho mọi ngành nghề đòi hỏi sự chính xác và tốc độ.',
    'cases.c1.title': 'Bán Hàng & Chăm Sóc Khách Hàng',
    'cases.c1.desc': 'Không còn phải mở app ngân hàng copy số tài khoản, không phải gõ đi gõ lại chính sách đổi trả hay địa chỉ cửa hàng. Gửi ngay cho khách trong 1 giây.',
    'cases.c2.title': 'Văn Phòng, Tuyển Dụng & Quản Lý',
    'cases.c2.desc': 'Soạn thảo email trang trọng, gửi thư mời phỏng vấn, báo cáo tiến độ tuần và biên bản họp với các trường thông tin điền nhanh chuyên nghiệp.',
    'cases.c3.title': 'Lập Trình Viên & IT Support',
    'cases.c3.desc': 'Lưu các câu lệnh docker phức tạp, snippet cấu hình nginx, mẫu commit chuẩn conventional commit, cURL endpoint và SQL queries thường dùng.',
    'cases.c4.title': 'Freelancer & Sáng Tạo Nội Dung',
    'cases.c4.desc': 'Gửi báo giá dịch vụ, link mạng xã hội cá nhân, portfolio, thông tin xuất hóa đơn đỏ và điều khoản hợp đồng tức thì cho đối tác.',

    'faq.tag': 'HỎI ĐÁP',
    'faq.title': 'Câu Hỏi Thường Gặp',
    'faq.q1': 'QuickMessage hoạt động như thế nào trên macOS?',
    'faq.a1': 'QuickMessage chạy ngầm kín đáo trên thanh Menu Bar của macOS. Khi bạn gõ tiền tố mặc định là <code>\\</code> theo sau bởi từ khoá đã cài đặt, một cửa sổ overlay siêu nhẹ sẽ xuất hiện để bạn chọn hoặc tự động thay thế bằng nội dung hoàn chỉnh ngay tại vị trí con trỏ chuột.',
    'faq.q2': 'Tại sao ứng dụng cần cấp quyền Accessibility (Trợ năng)?',
    'faq.a2': 'Hệ điều hành macOS yêu cầu quyền Accessibility đối với mọi ứng dụng gõ tắt để có thể phát hiện sự kiện bàn phím trên các ứng dụng khác và tự động chèn văn bản thay thế vào ứng dụng bạn đang dùng. QuickMessage cam kết 100% dữ liệu phím chỉ được đối chiếu cục bộ trên máy và không bao giờ lưu trữ hay truyền đi bất kỳ đâu.',
    'faq.q3': 'Dữ liệu có được đồng bộ giữa các máy Mac không?',
    'faq.a3': 'Có! QuickMessage tích hợp đồng bộ thông qua Apple iCloud (CloudKit). Dữ liệu được mã hoá và lưu trực tiếp trong vùng lưu trữ iCloud cá nhân của bạn, không thông qua bất kỳ server trung gian nào của bên thứ ba.',
    'faq.q4': 'Ứng dụng hỗ trợ những dòng máy Mac nào?',
    'faq.a4': 'QuickMessage hỗ trợ cả chip Apple Silicon (M1, M2, M3, M4) lẫn các dòng máy Mac sử dụng chip Intel, tương thích với macOS 12 (Monterey), macOS 13 (Ventura), macOS 14 (Sonoma) và macOS 15 (Sequoia).',

    'cta.title': 'Sẵn Sàng Tăng Tốc Độ Gõ Phím Của Bạn?',
    'cta.desc': 'Tải QuickMessage và bắt đầu tiết kiệm hàng giờ gõ các đoạn văn bản lặp lại mỗi tuần ngay từ hôm nay.',
    'cta.btn': 'Tải Bản Cài Đặt (.dmg) Miễn Phí',
    'cta.sub': 'Tương thích macOS 12+ • Apple Silicon & Intel • Cài đặt và sử dụng ngay lập tức',

    'footer.brand.desc': 'Ứng dụng gõ tắt thông minh hàng đầu cho macOS. Tối ưu hoá năng suất, tiết kiệm thời gian và đảm bảo an toàn dữ liệu tuyệt đối.',
    'footer.col1': 'Tính Năng',
    'footer.col2': 'Bảo Mật',
    'footer.col3': 'Nền Tảng',
    'footer.cpr1': '© 2026 QuickMessage for macOS. Thiết kế tỉ mỉ cho người dùng Mac.',
    'footer.cpr2': 'Cam kết không theo dõi, không quảng cáo, không thu thập dữ liệu người dùng.'
  }
};

function initI18n() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  const savedLang = langParam || localStorage.getItem('qm_landing_lang') || 'en';
  setLanguage(savedLang, false);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang, true);
    });
  });
}

function setLanguage(lang, saveToStorage = true) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  if (saveToStorage) localStorage.setItem('qm_landing_lang', lang);

  document.documentElement.lang = lang;

  // Toggle active class on lang switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Apply translations to all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Apply placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update SEO meta tags
  if (translations[lang]) {
    if (translations[lang]['page.title']) {
      document.title = translations[lang]['page.title'];
      const metaTitle = document.querySelector('meta[name="title"]');
      if (metaTitle) metaTitle.setAttribute('content', translations[lang]['page.title']);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', translations[lang]['page.title']);
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', translations[lang]['page.title']);
    }
    if (translations[lang]['page.description']) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', translations[lang]['page.description']);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', translations[lang]['page.description']);
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', translations[lang]['page.description']);
    }
    if (translations[lang]['page.keywords']) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', translations[lang]['page.keywords']);
    }
  }

  // Update dynamic hero scenario texts
  updateHeroScenarioLang(lang);
  // Update playground texts
  updatePlaygroundLang(lang);
}

/* ==========================================================================
   2. Navbar Scroll Effect & Smooth Scrolling
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Handle direct hash navigation
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) {
      window.scrollTo(0, el.offsetTop - 70);
    }
  }
}

/* ==========================================================================
   3. Hero Interactive macOS Simulation (Prefix '\')
   ========================================================================== */
const heroScenariosI18n = {
  en: {
    chat: {
      appName: 'Telegram',
      appSubtitle: 'Messaging with Client',
      avatar: 'TL',
      avatarGradient: 'linear-gradient(135deg, #2aabee, #229ed9)',
      incomingMsg: 'Could you please send over your bank account details for invoice payment?',
      triggerInput: '\\bank',
      overlayTitle: 'QuickMessage - Snippet Match',
      stepPreparing: 'Simulating typing on Telegram...',
      stepTyping: 'Typing shortcut: ',
      stepExpanding: 'Expanding snippet into chat...',
      stepDone: 'Snippet expanded instantly with zero delay!',
      snippets: [
        {
          keyword: 'bank',
          title: 'Chase Bank Checking',
          preview: 'Routing: 021000021 • Acc: 9876543210',
          expanded: 'Bank: CHASE BANK N.A.\nRouting No: 021000021\nAccount: 9876543210\nBeneficiary: ALEX NGUYEN'
        },
        {
          keyword: 'iban',
          title: 'International Wire (IBAN)',
          preview: 'GB29 NWBK 6016 1331 9268 19',
          expanded: 'Bank: NatWest UK\nIBAN: GB29 NWBK 6016 1331 9268 19\nSWIFT: NWBKGB2L'
        }
      ]
    },
    email: {
      appName: 'Apple Mail',
      appSubtitle: 'New Message to Partner',
      avatar: '✉️',
      avatarGradient: 'linear-gradient(135deg, #0a84ff, #5ac8fa)',
      incomingMsg: 'Hi there, we loved your product demo. Could you email us the pricing breakdown?',
      triggerInput: '\\reply',
      overlayTitle: 'QuickMessage - Email Template',
      stepPreparing: 'Composing in Apple Mail...',
      stepTyping: 'Typing shortcut: ',
      stepExpanding: 'Inserting email body template...',
      stepDone: 'Email draft generated in 1 second!',
      snippets: [
        {
          keyword: 'reply',
          title: 'Product Proposal & Overview',
          preview: 'Hi team, thank you for reaching out...',
          expanded: 'Hi team,\n\nThank you for reaching out and trying QuickMessage! I have attached our detailed overview and feature specs.\n\nPlease feel free to book a quick call if you have any questions.\n\nBest regards,\nAlex Nguyen'
        },
        {
          keyword: 'intro',
          title: 'QuickMessage Introduction',
          preview: 'QuickMessage is a native macOS text expander...',
          expanded: 'QuickMessage is a high-performance native macOS text expander designed for privacy and speed.'
        }
      ]
    },
    signature: {
      appName: 'Slack / Notes',
      appSubtitle: 'Work Channel #general',
      avatar: '📝',
      avatarGradient: 'linear-gradient(135deg, #ff9f0a, #ffd60a)',
      incomingMsg: 'Please add your signature and contact details below.',
      triggerInput: '\\sig',
      overlayTitle: 'QuickMessage - Signatures',
      stepPreparing: 'Typing in Slack...',
      stepTyping: 'Typing shortcut: ',
      stepExpanding: 'Replacing with full signature...',
      stepDone: 'Full professional signature inserted!',
      snippets: [
        {
          keyword: 'sig',
          title: 'Corporate Signature',
          preview: 'Best regards — Alex Nguyen | Lead Engineer',
          expanded: 'Best regards,\nAlex Nguyen | Lead Product Engineer\nEmail: alex@qmessage.online • Mobile: (+1) 415-555-0199\nQuickMessage Inc. • Native macOS Experience'
        }
      ]
    },
    coding: {
      appName: 'Terminal / zsh',
      appSubtitle: 'macOS Developer Shell',
      avatar: '💻',
      avatarGradient: 'linear-gradient(135deg, #30d158, #0a84ff)',
      incomingMsg: '$ # Testing cloud sync and local deployment...',
      triggerInput: '\\curl',
      overlayTitle: 'QuickMessage - Developer Snippets',
      stepPreparing: 'Typing in Terminal shell...',
      stepTyping: 'Typing shortcut: ',
      stepExpanding: 'Executing multi-line command...',
      stepDone: 'Command expanded without typos!',
      snippets: [
        {
          keyword: 'curl',
          title: 'cURL test POST endpoint',
          preview: 'curl -X POST https://api.local/v1...',
          expanded: 'curl -X POST https://api.local/v1/sync \\\n  -H "Authorization: Bearer $QM_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"sync": true, "timestamp": 1727950000}\''
        }
      ]
    }
  },
  vi: {
    chat: {
      appName: 'Telegram',
      appSubtitle: 'Đang nhắn tin với Đối tác',
      avatar: 'TL',
      avatarGradient: 'linear-gradient(135deg, #2aabee, #229ed9)',
      incomingMsg: 'Anh gửi lại giúp em số tài khoản để bên em hoàn tất thanh toán hợp đồng nhé!',
      triggerInput: '\\bank',
      overlayTitle: 'QuickMessage - Gợi ý snippet',
      stepPreparing: 'Chuẩn bị gõ phím trên Telegram...',
      stepTyping: 'Đang gõ phím: ',
      stepExpanding: 'Đang tự động chèn thông tin tài khoản...',
      stepDone: 'Đã thay thế nội dung hoàn chỉnh tức thì!',
      snippets: [
        {
          keyword: 'bank',
          title: 'STK Vietcombank',
          preview: '0123456789 - NGUYEN VAN A',
          expanded: 'Ngân hàng: VIETCOMBANK (VCB)\nSố TK: 0123456789\nChủ TK: NGUYEN VAN A\nChi nhánh: TP. Hồ Chí Minh'
        },
        {
          keyword: 'tk',
          title: 'STK Techcombank',
          preview: '1903847291 - NGUYEN VAN A',
          expanded: 'Ngân hàng: TECHCOMBANK\nSố TK: 1903847291\nChủ TK: NGUYEN VAN A'
        }
      ]
    },
    email: {
      appName: 'Apple Mail',
      appSubtitle: 'Thư mới tới Đối tác & Khách hàng',
      avatar: '✉️',
      avatarGradient: 'linear-gradient(135deg, #0a84ff, #5ac8fa)',
      incomingMsg: 'Chào bạn, công ty mình đang tìm hiểu giải pháp này, có thể gửi thông tin chi tiết qua email không?',
      triggerInput: '\\reply',
      overlayTitle: 'Mẫu Email Trả Lời Nhanh',
      stepPreparing: 'Chuẩn bị soạn thảo trong Apple Mail...',
      stepTyping: 'Đang gõ phím: ',
      stepExpanding: 'Đang chèn mẫu email phản hồi...',
      stepDone: 'Đã hoàn thành nội dung email trong 1 giây!',
      snippets: [
        {
          keyword: 'reply',
          title: 'Phản hồi tư vấn khách hàng',
          preview: 'Chào anh/chị, cảm ơn anh/chị đã quan tâm...',
          expanded: 'Dạ em chào anh/chị,\n\nCảm ơn anh/chị đã quan tâm đến QuickMessage! Em xin gửi kèm tài liệu tổng quan và bảng thông số chi tiết qua file đính kèm.\n\nNếu cần trao đổi thêm thông tin gì, anh/chị cứ nhắn em nhé. Chúc anh/chị một ngày làm việc hiệu quả!'
        }
      ]
    },
    signature: {
      appName: 'Notes / Slack',
      appSubtitle: 'Soạn thảo văn bản & Chữ ký',
      avatar: '📝',
      avatarGradient: 'linear-gradient(135deg, #ff9f0a, #ffd60a)',
      incomingMsg: 'Anh ký xác nhận rồi gửi kèm thông tin liên hệ giúp em với nhé.',
      triggerInput: '\\sig',
      overlayTitle: 'Chữ Ký Điện Tử',
      stepPreparing: 'Chuẩn bị chèn chữ ký trong Slack...',
      stepTyping: 'Đang gõ phím: ',
      stepExpanding: 'Đang thay thế chữ ký hoàn chỉnh...',
      stepDone: 'Đã chèn chữ ký công việc chuyên nghiệp!',
      snippets: [
        {
          keyword: 'sig',
          title: 'Chữ ký công việc chính',
          preview: 'Trân trọng / Best regards — Nguyễn Văn A...',
          expanded: 'Trân trọng / Best regards,\nNguyễn Văn A | Senior Product Engineer\nPhone: (+84) 901 234 567\nQuickMessage Corp • Trải nghiệm macOS Native'
        }
      ]
    },
    coding: {
      appName: 'Terminal / zsh',
      appSubtitle: 'macOS Developer Shell',
      avatar: '💻',
      avatarGradient: 'linear-gradient(135deg, #30d158, #0a84ff)',
      incomingMsg: '$ # Kiểm tra API endpoint và kiểm thử CloudKit Sync...',
      triggerInput: '\\curl',
      overlayTitle: 'Developer Snippets',
      stepPreparing: 'Chuẩn bị gõ lệnh trong Terminal...',
      stepTyping: 'Đang gõ phím: ',
      stepExpanding: 'Đang mở rộng câu lệnh cURL...',
      stepDone: 'Đã mở rộng lệnh chính xác, không gõ sai!',
      snippets: [
        {
          keyword: 'curl',
          title: 'cURL test POST request',
          preview: 'curl -X POST https://api.local/v1...',
          expanded: 'curl -X POST https://api.local/v1/sync \\\n  -H "Authorization: Bearer $QM_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"sync": true, "timestamp": 1727950000}\''
        }
      ]
    }
  }
};

let currentScenarioKey = 'chat';
let isAutoPlaying = true;
let heroTimeouts = [];

function clearHeroTimeouts() {
  heroTimeouts.forEach(t => clearTimeout(t));
  heroTimeouts = [];
}

function updateHeroScenarioLang(lang) {
  playScenario(currentScenarioKey);
}

function initHeroDemo() {
  const tabs = document.querySelectorAll('.showcase-tab');
  const togglePlayBtn = document.getElementById('heroTogglePlayBtn');
  const replayBtn = document.getElementById('heroReplayBtn');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const scenario = tab.dataset.scenario;
      if (scenario && heroScenariosI18n[currentLang][scenario]) {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentScenarioKey = scenario;
        isAutoPlaying = false;
        updatePlayPauseButton();
        playScenario(scenario);
      }
    });
  });

  if (togglePlayBtn) {
    togglePlayBtn.addEventListener('click', () => {
      isAutoPlaying = !isAutoPlaying;
      updatePlayPauseButton();
      if (isAutoPlaying) {
        cycleNextScenario();
      }
    });
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      playScenario(currentScenarioKey);
    });
  }

  playScenario('chat');
}

function updatePlayPauseButton() {
  const togglePlayBtn = document.getElementById('heroTogglePlayBtn');
  if (!togglePlayBtn) return;
  const t = translations[currentLang];
  togglePlayBtn.textContent = isAutoPlaying ? `⏸ ${t['showcase.pause']}` : `▶️ ${t['showcase.resume']}`;
}

function playScenario(scenarioKey) {
  clearHeroTimeouts();
  const scenarios = heroScenariosI18n[currentLang] || heroScenariosI18n['en'];
  const s = scenarios[scenarioKey];
  if (!s) return;

  const appNameEl = document.getElementById('demoAppName');
  const appSubEl = document.getElementById('demoAppSub');
  const avatarEl = document.getElementById('demoAvatar');
  const incomingMsgEl = document.getElementById('demoIncomingMsg');
  const outgoingWrap = document.getElementById('demoOutgoingWrap');
  const textDisplay = document.getElementById('demoTextDisplay');
  const overlay = document.getElementById('demoOverlay');
  const overlayList = document.getElementById('demoOverlayList');
  const stepLabel = document.getElementById('demoStepLabel');

  if (appNameEl) appNameEl.textContent = s.appName;
  if (appSubEl) appSubEl.textContent = s.appSubtitle;
  if (avatarEl) {
    avatarEl.textContent = s.avatar;
    avatarEl.style.background = s.avatarGradient;
  }
  if (incomingMsgEl) {
    incomingMsgEl.textContent = s.incomingMsg;
    incomingMsgEl.style.display = 'block';
  }
  if (outgoingWrap) {
    outgoingWrap.style.display = 'none';
    outgoingWrap.innerHTML = '';
  }
  if (overlay) overlay.classList.remove('visible');
  if (textDisplay) textDisplay.innerHTML = '<span class="cursor-blink"></span>';
  if (stepLabel) stepLabel.textContent = s.stepPreparing;

  // Render popup snippets in demo overlay
  if (overlayList) {
    overlayList.innerHTML = '';
    s.snippets.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = `qm-overlay-item ${index === 0 ? 'selected' : ''}`;
      li.innerHTML = `
        <span class="qm-trigger-tag">\\${item.keyword}</span>
        <div class="qm-item-details">
          <div class="qm-item-title">${item.title}</div>
          <div class="qm-item-preview">${item.preview}</div>
        </div>
        ${index === 0 ? '<span class="qm-return-icon">↵</span>' : ''}
      `;
      overlayList.appendChild(li);
    });
  }

  // Animation timeline
  let delay = 900;
  const triggerText = s.triggerInput; // e.g. "\bank"

  // Typing animation
  for (let i = 1; i <= triggerText.length; i++) {
    const subStr = triggerText.substring(0, i);
    const tTyping = setTimeout(() => {
      if (textDisplay) textDisplay.innerHTML = escapeHtml(subStr) + '<span class="cursor-blink"></span>';
      if (stepLabel) stepLabel.textContent = `${s.stepTyping} ${subStr}`;
    }, delay);
    heroTimeouts.push(tTyping);
    delay += 180;
  }

  // Show QuickMessage popup
  const tShowOverlay = setTimeout(() => {
    if (overlay) overlay.classList.add('visible');
    if (stepLabel) stepLabel.textContent = s.stepExpanding;
  }, delay + 200);
  heroTimeouts.push(tShowOverlay);
  delay += 850;

  // Flash select
  const tFlash = setTimeout(() => {
    const firstItem = overlayList ? overlayList.querySelector('.qm-overlay-item.selected') : null;
    if (firstItem) firstItem.style.background = 'rgba(10, 132, 255, 0.4)';
  }, delay);
  heroTimeouts.push(tFlash);
  delay += 250;

  // Expand snippet into conversation
  const tExpand = setTimeout(() => {
    if (overlay) overlay.classList.remove('visible');
    if (textDisplay) textDisplay.innerHTML = '<span class="cursor-blink"></span>';
    if (outgoingWrap) {
      outgoingWrap.innerHTML = escapeHtml(s.snippets[0].expanded).replace(/\n/g, '<br>');
      outgoingWrap.style.display = 'block';
    }
    if (stepLabel) stepLabel.textContent = s.stepDone;
  }, delay);
  heroTimeouts.push(tExpand);
  delay += 3000;

  // Auto-play to next scenario if enabled
  if (isAutoPlaying) {
    const tNext = setTimeout(() => {
      cycleNextScenario();
    }, delay);
    heroTimeouts.push(tNext);
  }
}

function cycleNextScenario() {
  const keys = ['chat', 'email', 'signature', 'coding'];
  const nextIdx = (keys.indexOf(currentScenarioKey) + 1) % keys.length;
  currentScenarioKey = keys[nextIdx];

  const tabs = document.querySelectorAll('.showcase-tab');
  tabs.forEach(tab => {
    if (tab.dataset.scenario === currentScenarioKey) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  playScenario(currentScenarioKey);
}

/* ==========================================================================
   4. Live Playground (Testing Sandbox with Prefix '\')
   ========================================================================== */
const playgroundSnippetsI18n = {
  en: [
    {
      trigger: '\\bank',
      title: 'Chase Bank Checking',
      body: 'Bank: CHASE BANK N.A.\nRouting: 021000021\nAccount: 9876543210\nBeneficiary: ALEX NGUYEN'
    },
    {
      trigger: '\\email',
      title: 'Client Welcome & Introduction',
      body: 'Dear Client,\n\nThank you for choosing QuickMessage! We are thrilled to have you on board. Please let us know if you need anything.'
    },
    {
      trigger: '\\sig',
      title: 'Professional Email Signature',
      body: 'Best regards,\nAlex Nguyen | Lead Product Engineer\nEmail: contact@qmessage.online\nPhone: (+1) 415-555-0199'
    },
    {
      trigger: '\\meeting',
      title: 'Quick Meeting Confirmation',
      body: 'Hi,\n\nI confirm our scheduled call for tomorrow at 10:00 AM PST via Google Meet. Looking forward to speaking!'
    },
    {
      trigger: '\\hotline',
      title: '24/7 Customer Support',
      body: 'Support Hotline: (+1) 800-555-0199 (Available 24/7 Monday to Sunday)'
    }
  ],
  vi: [
    {
      trigger: '\\bank',
      title: 'STK Vietcombank',
      body: 'Ngân hàng: VIETCOMBANK\nSố tài khoản: 0123456789\nChủ tài khoản: NGUYEN VAN A\nChi nhánh: TP. Hồ Chí Minh'
    },
    {
      trigger: '\\tk',
      title: 'STK Techcombank',
      body: 'Ngân hàng: TECHCOMBANK\nSố tài khoản: 19038472910\nChủ tài khoản: NGUYEN VAN A'
    },
    {
      trigger: '\\sig',
      title: 'Chữ ký Email Chuyên Nghiệp',
      body: 'Trân trọng,\nNguyễn Văn A | Product Lead\nEmail: contact@qmessage.online\nPhone: (+84) 901 234 567'
    },
    {
      trigger: '\\email',
      title: 'Mẫu chào mừng khách hàng',
      body: 'Kính gửi quý khách,\n\nCảm ơn bạn đã lựa chọn sử dụng dịch vụ của chúng tôi. Chúng tôi rất hân hạnh được đồng hành cùng bạn!'
    },
    {
      trigger: '\\hotline',
      title: 'Tổng đài hỗ trợ 24/7',
      body: 'Hotline CSKH: 1900 6868 (Hỗ trợ 24/7 từ Thứ 2 đến Chủ Nhật)'
    }
  ]
};

function updatePlaygroundLang(lang) {
  const statusEl = document.getElementById('playgroundStatus');
  if (statusEl) {
    statusEl.textContent = translations[lang]['play.status.initial'];
  }
}

function initPlayground() {
  const textarea = document.getElementById('playgroundTextarea');
  const popup = document.getElementById('playgroundPopup');
  const popupList = document.getElementById('playgroundPopupList');
  const statusEl = document.getElementById('playgroundStatus');
  const pills = document.querySelectorAll('.quick-trigger-pill');

  if (!textarea || !popup) return;

  let selectedIndex = 0;
  let currentMatches = [];

  function getSnippets() {
    return playgroundSnippetsI18n[currentLang] || playgroundSnippetsI18n['en'];
  }

  function checkTrigger() {
    const val = textarea.value;
    const caretPos = textarea.selectionStart;
    const textBeforeCaret = val.slice(0, caretPos);

    // Look for '\' followed by alphanumeric characters at the end
    const match = textBeforeCaret.match(/(\\[a-zA-Z0-9]*)$/);

    if (match) {
      const query = match[1].toLowerCase();
      const snippets = getSnippets();
      currentMatches = snippets.filter(s => s.trigger.toLowerCase().startsWith(query));

      if (currentMatches.length > 0) {
        selectedIndex = 0;
        renderPopupResults(currentMatches, query);
        popup.classList.add('visible');
        if (statusEl) {
          const t = translations[currentLang];
          statusEl.textContent = t['play.status.found'].replace('{n}', currentMatches.length);
        }
        return;
      }
    }

    popup.classList.remove('visible');
    if (statusEl) {
      statusEl.textContent = translations[currentLang]['play.status.initial'];
    }
  }

  function renderPopupResults(matches, query) {
    popupList.innerHTML = '';
    matches.forEach((item, idx) => {
      const li = document.createElement('li');
      li.className = `qm-overlay-item ${idx === selectedIndex ? 'selected' : ''}`;
      li.innerHTML = `
        <span class="qm-trigger-tag">${item.trigger}</span>
        <div class="qm-item-details">
          <div class="qm-item-title">${item.title}</div>
          <div class="qm-item-preview">${item.body.split('\n')[0]}</div>
        </div>
        ${idx === selectedIndex ? '<span class="qm-return-icon">↵ Enter</span>' : ''}
      `;
      li.addEventListener('mousedown', (e) => {
        e.preventDefault();
        applySnippet(item);
      });
      popupList.appendChild(li);
    });
  }

  function applySnippet(snippet) {
    const val = textarea.value;
    const caretPos = textarea.selectionStart;
    const textBefore = val.slice(0, caretPos);
    const textAfter = val.slice(caretPos);

    // Replace the matched '\keyword' prefix
    const replacedBefore = textBefore.replace(/(\\[a-zA-Z0-9]*)$/, snippet.body);
    textarea.value = replacedBefore + textAfter;

    // Set cursor right after the expanded snippet
    const newPos = replacedBefore.length;
    textarea.setSelectionRange(newPos, newPos);
    textarea.focus();

    popup.classList.remove('visible');
    if (statusEl) {
      statusEl.textContent = currentLang === 'vi'
        ? `Đã chèn "${snippet.trigger}" thành công!`
        : `Successfully inserted "${snippet.trigger}"!`;
    }
  }

  // Handle typing & backspace
  textarea.addEventListener('input', checkTrigger);
  textarea.addEventListener('click', checkTrigger);
  textarea.addEventListener('keyup', (e) => {
    if (['ArrowLeft', 'ArrowRight'].includes(e.key)) checkTrigger();
  });

  // Handle keyboard navigation inside popup (Up, Down, Enter, Tab, Escape)
  textarea.addEventListener('keydown', (e) => {
    if (!popup.classList.contains('visible') || currentMatches.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % currentMatches.length;
      renderPopupResults(currentMatches, '');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + currentMatches.length) % currentMatches.length;
      renderPopupResults(currentMatches, '');
    } else if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      applySnippet(currentMatches[selectedIndex]);
    } else if (e.key === 'Escape') {
      popup.classList.remove('visible');
    }
  });

  // Quick click pills
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const trigger = pill.dataset.trigger;
      textarea.value = trigger;
      textarea.focus();
      textarea.setSelectionRange(trigger.length, trigger.length);
      checkTrigger();
    });
  });
}

/* ==========================================================================
   5. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. Global Actions & Helpers
   ========================================================================== */
function handleDownload() {
  const isEn = currentLang === 'en';
  const alertMsg = isEn 
    ? "Thank you for your interest! QuickMessage (.dmg) build is being prepared for immediate download."
    : "Cảm ơn bạn đã quan tâm! Bộ cài đặt QuickMessage (.dmg) đang được chuẩn bị để tải về.";
  alert(alertMsg);
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
