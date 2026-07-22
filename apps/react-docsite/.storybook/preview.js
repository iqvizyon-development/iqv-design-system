import * as rootPreview from '../../../.storybook/preview';

const turkishTranslations = {
  'Components/Divider': {
    description: 'Bölücü (Divider), içerikleri görsel olarak gruplara ayırmak için kullanılan ince bir çizgidir.',
    bestPractices:
      '## En İyi Pratikler\n\n- İçerik akışını bozmadan bölümleri birbirinden ayırmak için hafif çizgiler kullanın.',
  },
  'Components/Dropdown': {
    description:
      'Açılır Liste (Dropdown), kullanıcının bir listeden bir veya daha fazla seçeneği seçmesini sağlayan bir bileşendir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Seçenek sayısı 5 ile 15 arasındaysa Dropdown tercih edin. Daha az seçenek için RadioGroup, daha fazla seçenek için Combobox kullanılması önerilir.',
  },
  'Components/Button/ToggleButton': {
    description:
      'İki Durumlu Buton (ToggleButton), bir durumun açık veya kapalı olduğunu belirtmek için kullanılan basılabilir bir butondur.',
    bestPractices:
      '## En İyi Pratikler\n\n- Durum değişikliklerinin anında uygulanması gereken durumlarda tercih edilir.',
  },
  'Components/Card/Card': {
    description: 'Kart (Card), tek bir konuya ait içerik ve eylemleri bir arada sunan bir konteynerdir.',
    bestPractices:
      '## En İyi Pratikler\n\n- İlgili görselleri, başlıkları ve açıklamaları tek bir anlamlı blok halinde gruplamak için kullanın.',
  },
  'Components/Carousel/Carousel': {
    description:
      'Atlıkarınca (Carousel), birden fazla içerik veya görselin yatay bir şerit halinde kaydırılarak gösterilmesini sağlar.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kullanıcının slaytlar arasında kolayca geçiş yapabilmesi için net yönlendirme okları ve gezinti noktaları sunun.',
  },
  'Components/SpinButton': {
    description:
      'Değer Döndürme Butonu (SpinButton), kullanıcının artırma ve azaltma butonlarını kullanarak sayısal bir değeri değiştirmesini sağlar.',
    bestPractices:
      '## En İyi Pratikler\n\n- Sınırlı ve belirli bir aralıktaki sayısal değerlerin hızlıca girilmesi için idealdir.',
  },
  'Components/SwatchPicker': {
    description:
      'Renk Paleti Seçici (SwatchPicker), kullanıcının önceden tanımlanmış renk kutucukları arasından seçim yapmasını sağlar.',
    bestPractices:
      '## En İyi Pratikler\n\n- Sınırlı sayıda renk seçeneği sunulduğunda, renklerin görsel olarak kolayca seçilebilmesi için kullanın.',
  },
  'Components/Badge/PresenceBadge': {
    description:
      'Durum Rozeti (PresenceBadge), bir kullanıcının çevrimiçi, meşgul, dışarıda veya çevrimdışı gibi anlık durumunu gösterir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Genellikle bir Avatar bileşeninin sağ alt köşesinde konumlandırılarak kullanıcının durumunu belirtmek için kullanılır.',
  },
  'Components/RadioGroup': {
    description:
      'Radyo Grubu (RadioGroup), kullanıcının birbirini dışlayan bir dizi seçenek arasından yalnızca birini seçmesine olanak tanır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Seçeneklerin tamamının ekranda görünür olması gerektiğinde ve seçenek sayısı az olduğunda tercih edin.',
  },
  'Components/Rating': {
    description:
      'Derecelendirme (Rating), kullanıcının bir içerik veya hizmet hakkında yıldızlar aracılığıyla geri bildirim vermesini sağlar.',
    bestPractices:
      '## En İyi Pratikler\n\n- Genellikle 5 yıldızlı bir ölçek kullanılır. Yarım yıldız desteği sunarak daha hassas derecelendirme sağlayabilirsiniz.',
  },
  'Components/Menu/Menu': {
    description:
      'Menü (Menu), bir butona tıklandığında açılan ve kullanıcının seçebileceği eylemleri veya seçenekleri içeren bir listedir.',
    bestPractices:
      '## En İyi Pratikler\n\n- İlgili eylemleri gruplandırmak ve ekran alanından tasarruf etmek için kullanın.',
  },
  'Components/Combobox': {
    description:
      'Birleşik Giriş Kutusu (Combobox), kullanıcının metin yazarak arama yapabileceği ve listeden seçim yapabileceği gelişmiş bir açılır listedir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Seçenek sayısının çok fazla olduğu ve kullanıcının arama yaparak seçeneğe ulaşması gerektiği durumlarda tercih edin.',
  },
  'Components/Field': {
    description:
      'Alan (Field), bir giriş bileşenini, etiketini, açıklamasını ve hata mesajını bir arada sunan yapısal bir bileşendir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Form tasarımlarında tutarlılık sağlamak ve erişilebilirliği artırmak için her giriş bileşenini bir Field ile sarmalayın.',
  },
  'Components/Badge/Badge': {
    description:
      'Rozet (Badge), bir öğenin üzerindeki bildirim sayısını, durumunu veya kısa bir bilgiyi göstermek için kullanılır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Dikkat çekmek istediğiniz yeni veya okunmamış içeriklerin yanında konumlandırın.',
  },
  'Components/Switch': {
    description: 'Anahtar (Switch), bir ayarı açıp kapatmak için kullanılan iki durumlu bir butondur.',
    bestPractices:
      '## En İyi Pratikler\n\n- Anahtar kaydırıldığında ayar anında uygulanmalıdır (kaydet butonuna basılmasına gerek kalmadan).',
  },
  'Components/Checkbox': {
    description:
      'Onay Kutusu (Checkbox), kullanıcının bir listeden bağımsız bir veya daha fazla seçeneği seçmesini sağlar.',
    bestPractices: '## En İyi Pratikler\n\n- Seçeneklerin birbirinden bağımsız olduğu durumlarda kullanın.',
  },
  'Components/Spinner': {
    description:
      'Yükleme Göstergesi (Spinner), bir işlemin devam ettiğini ve kullanıcının beklemesi gerektiğini belirten döner bir animasyondur.',
    bestPractices:
      '## En İyi Pratikler\n\n- Ekran okuyucular için `aria-live="polite"` ve uygun bir yükleme etiketi ekleyin.',
  },
  'Components/IqvizyonProvider': {
    description:
      'Iqvizyon Sağlayıcı (IqvizyonProvider), uygulamanın tema, dil ve stil ayarlarını alt bileşenlere aktaran kök bileşendir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Uygulamanızın en kök dizinine yerleştirilmeli ve tüm Iqvizyon bileşenlerini sarmalamalıdır.',
  },
  'Components/Button/CompoundButton': {
    description:
      'Bileşik Buton (CompoundButton), ana başlığın altında ek bir açıklama metni barındıran gelişmiş bir butondur.',
    bestPractices:
      '## En İyi Pratikler\n\n- Butonun ne işe yaradığına dair daha fazla bağlam sunmak istediğinizde tercih edin.',
  },
  'Components/TabList': {
    description:
      'Sekme Listesi (TabList), kullanıcının farklı içerik görünümleri arasında geçiş yapmasını sağlayan bir sekme grubudur.',
    bestPractices:
      '## En İyi Pratikler\n\n- İlişkili içerikleri aynı sayfa içinde organize etmek ve sekmeler arasında kolay geçiş sağlamak için kullanın.',
  },
  'Components/Badge/Counter Badge': {
    description:
      'Sayaç Rozeti (Counter Badge), okunmamış mesaj sayısı gibi sayısal bildirimleri göstermek için kullanılan bir rozettir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Sayısal değerlerin net ve okunabilir şekilde gösterilmesi için dairesel formda tasarlanmıştır.',
  },
  'Components/Popover': {
    description:
      'Açılır Pencere (Popover), bir öğeye tıklandığında o öğenin yakınında açılan ve zengin içerik barındırabilen bir paneldir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Basit ipuçlarından daha karmaşık formlar veya etkileşimli içerikler sunmak için idealdir.',
  },
  'Components/Overflow': {
    description:
      'Taşma (Overflow), ekrana sığmayan bileşenlerin otomatik olarak bir "Daha Fazla" menüsü altında toplanmasını sağlar.',
    bestPractices:
      '## En İyi Pratikler\n\n- Duyarlı (responsive) tasarımlarda menü ve araç çubuklarının taşmasını önlemek için kullanın.',
  },
  'Components/AvatarGroup': {
    description:
      'Profil Resmi Grubu (AvatarGroup), birden fazla kullanıcının profil resmini yan yana veya üst üste yığılmış şekilde gösterir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Bir projede veya grupta yer alan aktif kişileri görsel olarak listelemek için kullanın.',
  },
  'Components/Label': {
    description: 'Etiket (Label), bir form giriş bileşeninin ne amaçla kullanıldığını belirten açıklayıcı metindir.',
    bestPractices: '## En İyi Pratikler\n\n- Her form alanının her zaman net ve erişilebilir bir etiketi olmalıdır.',
  },
  'Components/Table': {
    description: 'Tablo (Table), verileri satırlar ve sütunlar halinde düzenli bir şekilde göstermek için kullanılır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Tablo başlıklarını (`<th>`) ve uygun `scope` niteliklerini kullanarak ekran okuyucu uyumluluğunu sağlayın.',
  },
  'Components/Card/CardPreview': {
    description:
      'Kart Önizlemesi (CardPreview), kart bileşeninin içinde görsel veya video gibi medya içeriklerini barındıran bölümdür.',
    bestPractices:
      '## En İyi Pratikler\n\n- Genellikle kartın en üst kısmında konumlandırılarak ana görseli vurgulamak için kullanılır.',
  },
  'Components/Slider': {
    description: 'Sürgü (Slider), kullanıcının bir çubuğu kaydırarak belirli bir aralıktan değer seçmesini sağlar.',
    bestPractices:
      '## En İyi Pratikler\n\n- Ses seviyesi, parlaklık veya fiyat aralığı gibi kesin sayısal değer girişinin kritik olmadığı durumlar için idealdir.',
  },
  'Components/Textarea': {
    description: 'Metin Alanı (Textarea), kullanıcının çok satırlı uzun metinler girmesine olanak tanır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Yorumlar, açıklamalar veya geri bildirimler gibi uzun metin girişleri için kullanın.',
  },
  'Components/Carousel/CarouselNav': {
    description:
      'Atlıkarınca Gezinmesi (CarouselNav), atlıkarınca içindeki slaytlar arasında geçiş yapmayı sağlayan butonlar ve göstergelerdir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Slayt geçişlerinin kullanıcı tarafından kolayca kontrol edilebilmesi için görünür kılın.',
  },
  'Components/Card/CardHeader': {
    description:
      'Kart Başlığı (CardHeader), kart bileşeninin en üstünde yer alan başlık, alt başlık ve avatar gibi bilgileri barındıran bölümdür.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kartın içeriğini hızlıca özetlemek ve başlık hiyerarşisi oluşturmak için kullanın.',
  },
  'Components/Drawer': {
    description:
      'Çekmece (Drawer), ekranın kenarından kayarak açılan ve ek içerik veya gezinti menüleri barındıran bir paneldir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Ekran alanını korumak ve ikincil işlemleri veya filtreleri barındırmak için kullanın.',
  },
  'Components/Text': {
    description:
      'Metin (Text), tasarım sistemindeki tipografi standartlarına uygun olarak biçimlendirilmiş metinler oluşturmayı sağlar.',
    bestPractices:
      '## En İyi Pratikler\n\n- Başlıklar, paragraflar ve açıklamalar için tasarım belirteçlerine (tokens) uygun yazı tiplerini kullanın.',
  },
  'Components/Input': {
    description:
      'Giriş (Input), kullanıcının tek satırlı metin veya sayısal veri girmesini sağlayan temel form alanıdır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Her giriş alanının her zaman net ve açıklayıcı bir etiketi (Label) olmalıdır.',
  },
  'Components/Portal/toMountNodeProps': {
    description:
      'Bağlama Düğümü Özellikleri (toMountNodeProps), portalların DOM üzerinde hangi düğüme bağlanacağını yapılandırmak için kullanılır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Gelişmiş portal senaryolarında, bileşenin DOM ağacındaki yerini hassas bir şekilde kontrol etmek için kullanın.',
  },
  'Components/Avatar': {
    description: 'Profil Resmi (Avatar), bir kullanıcının veya nesnenin görsel temsilidir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Görsel bulunmadığında kullanıcının baş harflerini (initials) veya varsayılan bir ikon gösterin.',
  },
  'Components/Persona': {
    description:
      'Kişi Kartı (Persona), bir kişinin profil resmi, adı, unvanı ve çevrimiçi durumu gibi bilgilerini bir arada gösterir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Sohbet listeleri, kullanıcı profilleri veya ekip üyeleri listelerinde kişileri temsil etmek için kullanın.',
  },
  'Components/MessageBar': {
    description:
      'Mesaj Çubuğu (MessageBar), kullanıcılara bilgi, başarı, uyarı veya hata mesajlarını ileten yatay bir bildirim alanıdır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kritik olmayan sistem bildirimleri veya form işlem sonuçlarını göstermek için idealdir.',
  },
  'Components/Skeleton': {
    description:
      'İskelet Yükleme Ekranı (Skeleton), içerik yüklenirken sayfa düzeninin taslağını göstererek yükleme hissini iyileştiren bir bileşendir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Gerçek içeriğin şekline ve boyutuna en yakın iskelet taslaklarını kullanarak daha pürüzsüz bir geçiş sağlayın.',
  },
  'Components/Button/MenuButton': {
    description:
      'Menü Butonu (MenuButton), tıklandığında bir menü açan ve yanında bir aşağı ok ikonu barındıran butondur.',
    bestPractices:
      '## En İyi Pratikler\n\n- Birden fazla ilişkili eylemi tek bir butonun altında toplamak için kullanın.',
  },
  'Components/List': {
    description: 'Liste (List), benzer öğeleri düzenli bir sıra halinde alt alta göstermek için kullanılır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Liste öğelerinin okunabilirliğini artırmak için aralarındaki boşlukları ve hizalamaları tutarlı tutun.',
  },
  'Components/Tag/Tag': {
    description:
      'Etiket (Tag), bir öğeyi kategorize etmek, filtrelemek veya etiketlemek için kullanılan küçük, etkileşimli bir görsel öğedir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kullanıcıların kategorileri kolayca ayırt edebilmesi için farklı renk ve ikon varyasyonları sunun.',
  },
  'Components/RatingDisplay': {
    description:
      'Derecelendirme Gösterimi (RatingDisplay), bir içeriğin derecelendirme puanını salt okunur olarak yıldızlar ve sayılarla gösterir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kullanıcıların derecelendirmeyi değiştiremeyeceği, sadece mevcut skoru göreceği yerlerde tercih edin.',
  },
  'Components/TeachingPopover': {
    description:
      'Eğitici Açılır Pencere (TeachingPopover), kullanıcılara yeni özellikleri tanıtmak veya arayüzü öğretmek için kullanılan rehber paneldir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kullanıcıyı boğmamak için aynı anda sadece bir adet eğitici açılır pencere gösterin ve kolayca kapatılabilmesini sağlayın.',
  },
  'Components/SearchBox': {
    description:
      'Arama Kutusu (SearchBox), kullanıcının bir liste veya sayfa içinde arama yapmasını sağlayan, içinde arama ikonu ve temizleme butonu barındıran alandır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kullanıcı yazmaya başladığında anında filtreleme yapabilir veya Enter tuşuna basıldığında aramayı tetikleyebilirsiniz.',
  },
  'Components/Tag/TagGroup': {
    description:
      'Etiket Grubu (TagGroup), birden fazla etiket bileşenini bir arada düzenli bir şekilde sunan ve yöneten konteynerdir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Etiketlerin taşmasını önlemek ve düzenli bir satır halinde hizalamak için kullanın.',
  },
  'Components/Button/Button': {
    description: 'Buton (Button), tıklandığında bir eylemi veya olayı tetikleyen temel kullanıcı arayüzü öğesidir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Birincil eylemler için tek bir birincil buton kullanın, ikincil eylemleri daha sade butonlarla sunun.',
  },
  'Components/Dialog': {
    description: 'İletişim Kutusu (Dialog), kullanıcının onayını gerektiren veya ek bilgi sunan geçici bir penceredir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kullanıcının odaklanmasını gerektiren kritik kararlar veya formlar için kullanın.',
  },
  'Components/DataGrid': {
    description:
      'Veri Izgarası (DataGrid), büyük miktardaki verileri sıralama, filtreleme ve seçme özellikleriyle birlikte sunan gelişmiş bir tablodur.',
    bestPractices:
      '## En İyi Pratikler\n\n- Performans için büyük veri setlerinde sanallaştırma (virtualization) veya sayfalama (pagination) kullanın.',
  },
  'Components/Tooltip': {
    description:
      'İpucu (Tooltip), bir öğenin üzerine gelindiğinde veya odaklanıldığında kısa ve açıklayıcı bilgi sunan küçük kutucuktur.',
    bestPractices:
      '## En İyi Pratikler\n\n- Sadece ek ve yardımcı bilgiler için kullanın; kritik bilgileri tooltip içine gizlemeyin.',
  },
  'Components/Toolbar': {
    description:
      'Araç Çubuğu (Toolbar), sık kullanılan eylemleri ve butonları yatay bir şerit halinde bir arada sunan bileşendir.',
    bestPractices:
      '## En İyi Pratikler\n\n- İlgili araçları gruplara ayırarak ve aralarına bölücüler ekleyerek görsel düzeni artırın.',
  },
  'Components/Breadcrumb': {
    description:
      'Yol Haritası (Breadcrumb), kullanıcının site hiyerarşisi içindeki mevcut konumunu gösteren ve önceki sayfalara kolayca dönmesini sağlayan gezinti bağlantılarıdır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Hiyerarşik yapısı derin olan web sitelerinde kullanıcı deneyimini ve yön bulmayı kolaylaştırmak için kullanın.',
  },
  'Components/Select': {
    description:
      'Seçim Kutusu (Select), kullanıcının açılır bir listeden tek bir seçeneği seçmesini sağlayan standart form bileşenidir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Seçenek sayısının az ve sabit olduğu durumlarda yerel tarayıcı desteğiyle birlikte kullanın.',
  },
  'Components/Tag/InteractionTag': {
    description:
      'Etkileşimli Etiket (InteractionTag), tıklandığında veya kapatıldığında bir eylemi tetikleyebilen özel bir etiket türüdür.',
    bestPractices:
      '## En İyi Pratikler\n\n- Seçilen filtreleri iptal etmek veya dinamik etiket listeleri oluşturmak için idealdir.',
  },
  'Components/Link': {
    description:
      'Bağlantı (Link), kullanıcının başka bir sayfaya veya bölüme gitmesini sağlayan tıklanabilir metindir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Sayfa içi eylemler için Buton, gezinme (navigasyon) için Bağlantı kullanın.',
  },
  'Components/ColorPicker': {
    description:
      'Renk Seçici (ColorPicker), kullanıcının renk paleti veya renk değerleri girerek özel bir renk seçmesini sağlayan gelişmiş bileşendir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Tasarım araçları veya özelleştirilebilir arayüz ayarlarında kullanıcılara geniş renk özgürlüğü sunmak için kullanın.',
  },
  'Components/Nav': {
    description:
      'Gezinme (Nav), uygulamanın ana bölümleri arasında geçiş yapmayı sağlayan dikey veya yatay menü sistemidir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Uygulama içi ana gezinti yapısını oluşturmak için sol kenar çubuğunda veya üst barda konumlandırın.',
  },
  'Components/Toast': {
    description:
      'Anlık Bildirim (Toast), ekranın köşesinde geçici olarak beliren ve kullanıcıya işlem sonuçlarını ileten hafif bildirimlerdir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kullanıcının mevcut işini bölmeden, arka planda tamamlanan işlemler hakkında bilgi vermek için kullanın.',
  },
  'Components/Tree': {
    description:
      'Ağaç Görünümü (Tree), hiyerarşik verileri (klasör yapıları gibi) genişletilebilir ve daraltılabilir dallar halinde sunar.',
    bestPractices:
      '## En İyi Pratikler\n\n- Dosya sistemleri, organizasyon şemaları veya kategorize edilmiş derin hiyerarşiler için kullanın.',
  },
  'Components/Image': {
    description:
      'Resim (Image), görsellerin duyarlı (responsive) ve performanslı bir şekilde yüklenmesini ve gösterilmesini sağlayan bileşendir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Resim yüklenirken düzen kaymalarını önlemek için genişlik ve yükseklik oranlarını önceden tanımlayın.',
  },
  'Components/Portal/Portal': {
    description:
      'Portal (Portal), bir bileşenin DOM ağacında hiyerarşik olarak farklı bir yere (genellikle document.body altına) işlenmesini (render) sağlar.',
    bestPractices:
      '## En İyi Pratikler\n\n- İletişim kutuları, açılır pencereler ve ipuçları gibi üst üste binen (overlay) bileşenlerin kırpılmasını önlemek için kullanın.',
  },
  'Components/ProgressBar': {
    description:
      'İlerleme Çubuğu (ProgressBar), uzun süren bir işlemin tamamlanma yüzdesini görsel olarak gösteren çubuktur.',
    bestPractices:
      '## En İyi Pratikler\n\n- İşlemin ne kadar süreceği biliniyorsa yüzdesel ilerleme, bilinmiyorsa belirsiz (indeterminate) yükleme durumunu gösterin.',
  },
  'Components/Accordion': {
    description:
      'Akordeon (Accordion), dikey olarak üst üste yığılmış ve tıklandığında genişleyerek detaylı içerik gösteren bölümlerdir.',
    bestPractices:
      '## En İyi Pratikler\n\n- SSS (Sıkça Sorulan Sorular) sayfaları gibi, sayfa alanından tasarruf etmek ve içeriği gruplandırmak istediğiniz yerlerde kullanın.',
  },
  'Components/TagPicker': {
    description:
      'Etiket Seçici (TagPicker), kullanıcının arama yaparak veya önerilen listeden birden fazla etiket seçmesini sağlayan form alanıdır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kullanıcılara çoklu kategori, ilgi alanı veya kişi etiketleme imkanı sunmak için kullanın.',
  },
  'Components/Menu/MenuList': {
    description:
      'Menü Listesi (MenuList), menü bileşeninin içindeki seçeneklerin listelendiği ve yönetildiği dikey gruptur.',
    bestPractices:
      '## En İyi Pratikler\n\n- Menü öğelerini mantıksal gruplara ayırmak ve aralarına bölücüler eklemek için kullanın.',
  },
  'Components/Card/CardFooter': {
    description:
      'Kart Alt Bilgisi (CardFooter), kart bileşeninin en altında yer alan ve eylem butonlarını barındıran bölümdür.',
    bestPractices:
      '## En İyi Pratikler\n\n- Kartla ilgili ana eylemleri (örneğin "Beğen", "Paylaş", "Satın Al") sağa hizalı olarak sunmak için kullanın.',
  },
  'Components/Button/SplitButton': {
    description:
      'Bölünmüş Buton (SplitButton), sol tarafı ana bir eylemi tetikleyen, sağ tarafı ise ek seçenekler menüsünü açan iki parçalı butondur.',
    bestPractices:
      '## En İyi Pratikler\n\n- Varsayılan bir ana eylemin yanında, o eylemle ilişkili alternatif seçenekleri sunmak için kullanın.',
  },
  'Compat Components/DatePicker': {
    description:
      'Tarih Seçici (DatePicker), uyumluluk sürümü olup eski Fluent UI v8 projelerinden geçişi kolaylaştırmak amacıyla tasarlanmıştır.',
    bestPractices: '## En İyi Pratikler\n\n- Yeni projelerde doğrudan modern React DatePicker bileşenini tercih edin.',
  },
  'Compat Components/TimePicker': {
    description:
      'Saat Seçici (TimePicker), uyumluluk sürümü olup eski projelerden geçişi kolaylaştırmak amacıyla tasarlanmıştır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Saat formatlarını kullanıcının yerel ayarlarına (24 saat veya AM/PM) uygun şekilde gösterin.',
  },
  'Compat Components/Calendar': {
    description:
      'Takvim (Calendar), uyumluluk sürümü olup eski projelerden geçişi kolaylaştırmak amacıyla tasarlanmıştır.',
    bestPractices:
      '## En İyi Pratikler\n\n- Haftanın ilk gününü kullanıcının yerel ayarlarına göre otomatik olarak yapılandırın.',
  },
  'Components/Dialog': {
    description:
      '`Dialog`, birincil pencerenin veya başka bir iletişim penceresinin üzerinde açılan bir penceredir. Kalıcı bir iletişim penceresinin altındaki pencereler etkisizdir. Başka bir deyişle kullanıcılar, etkin iletişim penceresinin dışındaki içerikle etkileşime geçemez. Etkin iletişim penceresinin dışındaki etkisiz içerik genellikle ayırt edilmesini zorlaştıracak şekilde görsel olarak gizlenir veya soluklaştırılır. Bazı uygulamalarda etkisiz içerikle etkileşim kurma girişimi iletişim penceresini kapatır.',
    bestPractices:
      '## En İyi Pratikler\n\n### Yapılması gerekenler\n\n- İletişim kutuları, bir gövde (`DialogBody`) içinde yer alması gereken başlık (`DialogTitle`), içerik (`DialogContent`) ve alt bilgi (`DialogActions`) bölümlerinden oluşur.\n- İletişim penceresini kapatmadan önce kullanıcı girişlerinin geçerli olduğunu doğrulayın. Düzeltilmesi gereken alanın yanında satır içi bir doğrulama hatası gösterin.\n- Kalıcı iletişim pencerelerini çok seyrek kullanın. Yalnızca kullanıcıların devam etmeden önce bir seçim yapması veya bilgi vermesi kritikse kullanın. Bu iletişim pencereleri genellikle geri alınamaz ya da veri kaybına yol açabilecek işlemlerde kullanılır ve hafif kapatma özelliği olmayan bir arka planla birlikte sunulur.\n- Kısa onay iletişim pencerelerinde `DialogSurface` üzerinde iletişim penceresi içeriğini işaret eden bir `aria-describedby` özniteliği ekleyin.\n- `DialogTitle` yoksa `DialogSurface` üzerinde bir `aria-label` veya `aria-labelledby` özniteliği ekleyin.\n\n### Yapılmaması gerekenler\n\n- `DialogActions` içinde üçten fazla düğme kullanmayın.\n- İç içe `Dialog` açmayın. Bu yaklaşım bir anti-pattern’dir ve kaçınılmalıdır. İç içe iletişim pencereleri karmaşık odak geri yükleme mantığı oluşturur ve kullanıcıların kafasını karıştırır. Tasarımınız iletişim pencerelerini üst üste koymayı gerektiriyorsa tek bir iletişim penceresinde çok adımlı bir sihirbaz, sıralı iletişim pencereleri veya başka bir kullanıcı arayüzü bileşeni (paneller, kenar çubukları, popover’lar) kullanın.\n- Odaklanılabilir öğesi olmayan bir `Dialog` kullanmayın.\n\n## Erişilebilirlik\n\n`Dialog` bileşenlerini kullanırken göz önünde bulundurmanız gereken erişilebilirlik sınır durumları şunlardır:\n\n1. NVDA, iletişim penceresi bilgisini iki kez okur.\n2. TalkBack, iletişim penceresi adını ve açıklamasını desteklemez.\n3. TalkBack, `alertdialog` öğesini desteklemez.\n4. İletişim penceresi içinde `Menu`, `Combobox`, `Dropdown` veya `Popover` kullanıldığında `aria-modal` özelliği `false` olmalıdır. Aksi halde iOS üzerindeki VoiceOver açılır pencereye erişemez. Bu ayar macOS üzerindeki VoiceOver için de gereklidir, aksi halde bu bileşenler seslendirilmez. `DialogSurface` slotuna `aria-modal={false}` uygulayın.\n5. `DialogSurface` varsayılan olarak `aria-describedby="dialog-content-id"` değerine sahiptir. Bu değer, karmaşık `DialogContent` içeriği için uygun olmayabilir. Bu senaryolarda, örneğin [formlu örnekte](#with-form), `aria-describedby={undefined}` ayarlanması önerilir.\n\n## Sunucu Taraflı Oluşturma\n\nİletişim pencereleri sunucu taraflı oluşturma ortamlarında varsayılan olarak sorunsuz çalışır. Ancak SSR hydration sorunlarını önlemek için aşağıdaki durumu göz önünde bulundurun:\n\n`unmountOnClose` değeri `false` olarak ayarlandığında (varsayılan değer `true`dur), `Dialog` öğeyi her zaman işlenmiş halde tutar. Ancak arka planda React Portal kullandığı ve portallar SSR’yi desteklemediği için hydration hatası oluşur. SSR ortamlarında bu özelliğin her zaman `true` olarak ayarlanması önerilir.',
  },
  'Components/InfoLabel': {
    description:
      'Bilgi Etiketi (InfoLabel), bir form alanı veya arayüz öğesi hakkında ek bağlam sağlamak için kullanılan kısa bir açıklama metnidir.',
    bestPractices:
      '## En İyi Pratikler\n\n- Yalnızca kullanıcıların görevi tamamlamak için ihtiyaç duyduğu ek bilgileri sunun.\n- Açıklamayı ilgili etiketin veya form alanının yakınına yerleştirin.',
  },
};

export const decorators = [
  (Story, context) => {
    const locale = context.globals.locale || 'en';
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.querySelectorAll('.docs-story').forEach(el => el.setAttribute('lang', locale));
    }

    if (context.parameters && context.parameters.docs) {
      const translation = turkishTranslations[context.title];
      if (translation) {
        if (locale === 'tr') {
          if (!context.parameters.docs._originalDescription) {
            context.parameters.docs._originalDescription = context.parameters.docs.description?.component;
          }
          context.parameters.docs.description = context.parameters.docs.description || {};
          context.parameters.docs.description.component = [translation.description, translation.bestPractices].join(
            '\n',
          );
        } else if (context.parameters.docs._originalDescription) {
          context.parameters.docs.description.component = context.parameters.docs._originalDescription;
        }
      }
    }

    return Story();
  },
  ...rootPreview.decorators,
];

export const globalTypes = {
  locale: {
    name: 'Language',
    description: 'Global language/locale for components',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'tr', title: 'Türkçe' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

/** @type {import("@iqvizyonui/react-storybook-addon").IqvizyonParameters & typeof rootPreview.parameters} */
export const parameters = {
  ...rootPreview.parameters,
  docs: {
    ...rootPreview.parameters.docs,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      /**
       * @see https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
       */
      order: [
        'Concepts',
        [
          'Introduction',
          'Developer',
          [
            'Quick Start',
            'Styling Components',
            'Positioning Components',
            'Server-Side Rendering',
            ['Basic setup', 'Next.js setup', 'Limitations with Portals'],
          ],
          'Recipes',
        ],
        'Theme',
        ['Border Radii', 'Colors', 'Fonts', 'Shadows', 'Spacing', 'Stroke Widths', 'Typography', 'Theme Designer'],
        'Components',
        'Compat Components',
        'Preview Components',
        'Motion',
        'Utilities',
      ],
    },
  },
  reactStorybookAddon: {
    docs: true,
  },
};

export const tags = ['autodocs'];
