document.getElementById('refreshButton').addEventListener('click', function() {
    var proverbs = [
    "Ev alma, komşu al.",
    "Gülme komşuna, gelir başına.",
    "Güneş balçıkla sıvanmaz.",
    "Hamama giren terler.",
    "Her kapının bir anahtarı vardır.",
    "Her işin başı sağlık.",
    "Huy canın altındadır.",
    "İki cambaz bir ipte oynamaz.",
    "İki dinle, bir söyle.",
    "İki karpuz bir koltuğa sığmaz.",
    "İstediğini söyleyen, istemediğini işitir.",
    "İşleyen demir pas tutmaz.",
    "İş insanın aynasıdır.",
    "Göz görmeyince gönül katlanır.",
    "Büyük lokma ye, büyük söz söyleme.",
    "Gülü seven dikenine katlanır.",
    "Gün doğmadan neler doğar.",
    "Güneş girmeyen eve doktor girer.",
    "Lâfla peynir gemisi yürümez.",
    "Ne oldum dememeli, ne olacağım demeli.",
    "Parayı veren düdüğü çalar.",
    "Rüzgâr eken, fırtına biçer.",
    "Sakla samanı, gelir zamanı.",
    "Tatlı dil yılanı deliğinden çıkarır.",
    "Terzi kendi söküğünü dikemez.",
    "Üzüm üzüme baka baka kararır.",
    "Zararın neresinden dönülse kârdır."

        // Daha fazla atasözü ekleyebilirsiniz.
    ];
    var randomIndex = Math.floor(Math.random() * proverbs.length);
    document.getElementById('quote').textContent = proverbs[randomIndex];
});