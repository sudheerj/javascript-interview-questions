const crypto = require("crypto");

function checksum(str, algorithm, encoding) {
  return crypto
    .createHash(algorithm || "md5")
    .update(str, "utf8")
    .digest(encoding || "hex");
}

module.exports = {
  onWillParseMarkdown: function (markdown) {
    return new Promise((resolve, reject) => {

      return resolve(markdown);
    });
  },
  onDidParseMarkdown: function (html, { cheerio }) {
    return new Promise((resolve, reject) => {
      const makeUrl = (name) => {
        return checksum(name.trim());
      };

      html = `
      <div class="a4">
        <div class="book-starter center">
          به نام خدا
        </div>
        <div class="book-name center">
          <span>مجموعه سوال و جواب‌های</span>
          <span class="font-black">جاواسکریپت</span>
        </div>
        <div class="book-author center">
          عیسی رضائی
          <br/>
        </div>
      </div>

      <div class="a4 empty"></div>
      
      ${html}`;

      const pishGoftar = `  
      <div class="a4 empty"></div>
      <div class="rtl a4 pishgoftar">
       <h3>پیشگفتار</h3>
       <p>در ابتدا، ممنونم از شما که با خرید این کتاب بهمون کمک کردین که بتونیم قدمی در راه کمک به افراد نیازمند برداریم و با درآمد حاصل از فروش این کتاب
       کمکی هر چند کوچیک در راه مسئولیت اجتماعی‌مون برداریم، به هم‌دیگه کمک کنیم، با هم مهربون‌تر باشیم و در کنار هم پیشرفت کنیم.
       تشکر گرم من رو، دورادور پذیرا باشین و امیدوارم این کتاب به جهت افزایش دانش‌تون و کمک به پیشرفت شغلی‌تون کمکی کرده باشه.
       <br/>
       کتابی که پیش‌روی شماست، حاصل تلاش نه فقط من، بلکه چندین نفر از بهترین و حرفه‌ای‌ترین دوستان بنده هم هست که در اینجا به ترتیب میزان زحمتی که متقبل شدن اسمشونو قید می‌کنم و کمال تشکر رو ازشون دارم:
       <ul>
          <li><strong>جعفررضائی</strong></li>
         <li><strong>مهسا مصباح</strong></li>
       </ul>
       این عزیزان هر کدام با کمک‌هاشون برای ترجمه، ویراستاری‌هاشون و حتی دل‌گرمی‌هاشون باعث شدن این مجموعه به زبان فارسی آماده بشه و به شکل چاپی بتونه به دستان شما برسه.
       </p>
              
       <h4>ماریوتک</h4>
       <p>
       برادر من جعفر رضائی، پلتفرم ماریوتک رو با هدف آموزش اصولی و رایگان، تاسیس کرد و من هم این کتاب رو از مجموعه ماریوتک منتشر میکنم. ما ماریوتک رو متعلق به همه می‌دونیم، پس اگه بعضی تایم‌های بیکاری داری که فکر می‌کنی می‌تونی باهامون توی این مسیر همراه باشی حتما بهم ایمیل بزن.
       ایده‌های ماریوتک برای افزایش آگاهی و دانش تا حد امکان رایگان خواهد بود و تا به اینجا هم، تنها هزینه‌های چاپ برداشته شده و مابقی به موسسات خیریه داده شدن.
       </p>
       
       
       <h4>مطالب کتاب</h4>
       <p>
       مطالب این کتاب می‌تونن تا حد بسیار خوبی دانش شما رو توی مسائل کلیدی مربوط جاواسکریپت و کتابخونه‌های پیرامون اون افزایش بدن. سوالات چالشی و کلیدی مطرح شده توی کتاب اکثرا سوالاتی هستند که توی مصاحبه‌های استخدامی پرسیده میشن و مسلط بودن به اونا می‌تونه شانس موفقیت شما برای موقعیت‌های شغلی که مدنظر دارین افزایش بده.
       مطالب این کتاب به دلیل ترجمه بودن تا حد زیادی قابل دستکاری نبودن و سعی شده تا حد امکان حق گردآورنده محفوظ باشه و با نسخه اصلی سورس که توسط Sudheer Jonna جمع‌آوری شده تفاوت معنایی نداشته باشه. بخشی از مطالب کتاب اصلی به خاطر قدیمی بودن منقضی شده بودن و به عنوان مترجم بخش‌های زیادی از نمونه کدها و مطالب قدیمی تصحیح شدند. در آخر، امیدوارم همیشه شاد و خندان و خوشحال باشین. مخلصیم
       </p>
      </div>
      `;

      html = html.replace('{Pishgoftar}', pishGoftar);
      html = html.replace(
        /(<h[1-6]>)(.*)(<\/h[1-6]>)/gm,
        (whole, p1, p2, p3) =>
          `${p1}<a id="${makeUrl(p2)}" class="anchor" href="#${makeUrl(
            p2
          )}">${p2}</a>${p3}`
      );

      html = html.replace(
        /(<li>)(.*)(<\/li>)/gm,
        (whole, p1, p2, p3) => `${p1}<p>${p2}</p>${p3}`
      );

      html = html.replace(
        /<strong><a \S+=["']?#((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?.*>(.*)<\/a><\/strong>/gm,
        (whole, p1, p2) =>
          `<strong><a class="backToTop" href="#${makeUrl(
            p2
          )}-q">${p2}</a></strong>`
      );

      html = html.replace(
        /<td><a \S+=["']?#((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?.*>(.*)<\/a><\/td>/gm,
        (whole, p1, p2) =>
          `<td id="${makeUrl(p2)}-q"><a class="fehrest" href="#${makeUrl(
            p2
          )}">${p2}</a></td>`
      );

      html = html.replace(
        /<h3><a .*\S+=["']?#((?:.(?!["']?\s*?[>"']))+.)["']?.*>(?:.\n*(?!(?:backToTop)))+<a class="backToTop" \S+=["']?#((?:.(?!["']?\s*?[>"']))+.)["']?.*>(?:.(?!\s+(?:\S+)|\s*?[>"']))+.[<]/gm,
        (whole, p1, p2) => whole.replace(p2, `${p1}-q`)
      );

      return resolve(html);
    });
  },
  onWillTransformMarkdown: function (markdown) {
    return new Promise((resolve, reject) => {
      return resolve(markdown);
    });
  },
  onDidTransformMarkdown: function (markdown) {
    return new Promise((resolve, reject) => {
      return resolve(markdown);
    });
  },
};
