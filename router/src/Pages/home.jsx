import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
export function Home(){
    const[image, setImage] = useState(0);

    const imagesContent = [
        'https://media.licdn.com/dms/image/D5612AQGhKn5KY3rRtQ/article-cover_image-shrink_720_1280/0/1712687627694?e=2147483647&v=beta&t=OXxGCUzOUVeB58XbD467c5ioH77lrmLq1MVtHd1pS8w',  //Kitoblar
        'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg', //Kiyimlar
        'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072230.jpg',  //Elektronika
        'https://static.photodexia.com/largeweb/repository/u-enblog/85e341ab1b695f9a25086477af74f1e4photo1449965408869eaa3f722e40d',  //Mexanika
        'https://www.f1recruitment.com/wp-content/uploads/2019/04/1524416476_YNznQD_sports-marketing.jpg', //Sport
        'https://www.yuenergy.co.uk/app/uploads/2023/08/back-to-school-marketing-blog.jpg', //O'quv qurollar
        'https://bulkquotesnow.com/wp-content/uploads/2021/10/How-to-Style-Shoes-With-Different-Types-of-Clothing-Items.jpeg',  //Kiyimlar
        'https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg',  //Elektronika
        'https://www.guvi.in/blog/wp-content/uploads/2023/11/Why-Learn-Digital-Marketing-through-Books_-1200x571.webp', //Kitoblar
        'https://st.depositphotos.com/1001951/5051/i/450/depositphotos_50513507-stock-photo-serviceman-making-car-diagnostics-with.jpg', //Mexanika
        'https://cdn.ocs.yale.edu/wp-content/uploads/sites/77/2024/01/sports-marketing.png', //Sport
        'https://media.licdn.com/dms/image/v2/D4E12AQGHPTyvHlIWbg/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1657639654552?e=1735776000&v=beta&t=qGKV95aSV5M1AELoLBV6RGEhKXwQmFYJ1EGgZIfXQDE',  //O'quv qurollari
    ]

    useEffect(()=>{
        const interval = setInterval(()=>{
            setImage((prevImages) => (prevImages + 1) % imagesContent.length)
        },2000)

        return ()=> clearInterval(interval)
    },[])

    return(
        <>
        <div className="main">
            <div className="header">
                <div className="header-logo">
                    <Link className="header-logo" to={'/home.jsx'}>Web-Market</Link>
                </div>
                <div className="header-menu">
                    <Link className="header-href" to={'./kiyimlar.jsx'}>Kiyimlar</Link>
                    <Link className="header-href" to={'./kitoblar.jsx'}>Kitoblar</Link>
                    <Link className="header-href" to={'./elektronika.jsx'}>Elektronika</Link>
                    <Link className="header-href" to={'./mexanika.jsx'}>Mexanika</Link>
                    <Link className="header-href" to={'./sport.jsx'}>Sport</Link>
                    <Link className="header-href" to={"./o'quv.jsx"}>O'quv-Qurollar</Link>
                </div>
            </div>
            <div className="section">
                <div className="section-text">
                    <Link to={'./kiyimlar.jsx'}><p><mark>Kiyimlar:</mark> <br />
                    Modaning har bir so‘zi va uslubi sizning shaxsiyatingizni aks ettiradi. Bizning kiyimlar kolleksiyamiz zamonaviy, qulay va turli xil ehtiyojlarga mos. Ishbilarmonlikdan tortib to dam olishgacha, har bir holat uchun mos kiyimlarni bizdan topishingiz mumkin. Har bir detal va tugma – bu uslub va sifatning timsoli. Yangi kiyimlar bilan o'z uslubingizni toping !</p>
                   </Link>
                   <Link to={'./kitoblar.jsx'}><p><mark>Kitoblar:</mark> <br/>
                    Bilim manbai sifatida kitoblar har doim dunyoni o'zgartirishga yordam beradi. Bizning kitoblar kolleksiyamiz orqali, siz o'zingizni yangi bilimlar bilan boyitishingiz mumkin. Adabiyot, ilmiy asarlar, o'quv qo‘llanmalar va motivatsion kitoblar – har bir kitob sizning fikrlash tarzini kengaytirishga yordam beradi. Kitoblar – bu yangi g‘oyalar, yangi dunyoqarashlar va yangi imkoniyatlar ochadi !</p>
                    </Link>
                    <Link to={'./elektronika.jsx'}><p><mark>Elektronika:</mark> <br />
                    Texnologiya dunyosining eng yangi yangiliklarini kashf eting! Bizning elektronika bo‘limimizda sizni kompyuterlar, smartfonlar, televizorlar, o‘yin konsollaridan tortib to smart soatlar va boshqalar kutmoqda. Har bir mahsulot yuqori texnologiyalarga asoslangan bo'lib, kunlik ehtiyojlaringizni yanada qulay va samarali qilishga yordam beradi. Elektronika olami bilan hayotingizni yanada zamonaviylashtiring !</p>
                    </Link>
                    <Link to={'./mexanika.jsx'}><p><mark>Mexanik Mahsulotlar:</mark> <br />
                    Mexanik asbob-uskunalar va texnika – bu ishni osonlashtiradigan va samarali qilishga yordam beradigan narsalardir. Bizning mexanik mahsulotlarimiz har qanday ishni bajarish uchun kerakli quvvat va aniqlikni ta'minlaydi. Avtomobillar uchun ehtiyot qismlar, qurilish asboblari, va boshqa texnik jihozlar sizning ish jarayoningizni eng yuqori darajada bajarishga yordam beradi. Kvalifikatsiyalangan texnikalar va ehtiyot qismlar bilan har bir loyiha muvaffaqiyatli bo'ladi !</p>
                    </Link>
                    <Link to={'./sport.jsx'}><p><mark>Sport Mahsulotlari:</mark> <br/>
                    Hayotning aktiv tarzini yoqtirganlar uchun, bizning sport narsalarimiz eng yaxshi hamrohingiz bo'ladi! Bu yerda siz turli sport turlari uchun zarur bo‘lgan barcha jihozlarni topasiz: yugurish poyabzallari, yoga matlari, velosipedlar, sport kiyimlari va boshqalar. Har bir mahsulotimiz yuqori sifat va qulaylikni ta'minlaydi, shuning uchun har bir mashg'ulotda eng yaxshi natijalarga erishishingiz mumkin. Endi o'zingizni eng yaxshi shaklda saqlash uchun eng yaxshi vositalarga ega bo'lishingiz mumkin !</p>
                    </Link>
                    <Link to={"./o'quv.jsx"}><p><mark>O‘quv qurollari:</mark> <br />
                    O‘quv qurollari – bu ta’lim jarayonida o‘quvchilar va talabalar tomonidan darslarni o‘zlashtirish, mashg‘ulotlarni bajarish, bilimlarni mustahkamlash va rivojlantirish uchun ishlatiladigan vositalardir. Ushbu qurollar turli xil fanlar bo‘yicha bilim olishda yordam beruvchi eng muhim jihozlardan sanaladi. Quyida o‘quv qurollarining asosiy turlari va ularning qisqacha tavsifi keltirilgan !</p>
                    </Link>
                    </div>
                <div className="section-img">
                    <img className="section-img" src={imagesContent[image]} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}