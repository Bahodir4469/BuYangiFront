import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex bg-[#13265C] h-auto justify-center w-full items-center">
      <div className="flex flex-col h-auto justify-center w-[90%] items-center py-16 xl:w-[80%]">
        <div className="flex flex-col w-full gap-5 items-stretch md:flex-row">
          {/* Contact Info */}
          <div className="flex flex-col bg-[#E2EAFF] rounded-[20px] gap-3 md:w-1/2 px-[12px] py-5">
            <div className="flex gap-[82px]">
              <p className="text-[13px] lg:text-[20px]">Manzil:</p>
              <p className="text-[12px] w-auto font-medium lg:text-[20px]">
                Toshkent sh., Mirzo Ulug‘bek tumani, Qorasu-4, 121-maktab
              </p>
            </div>
            <div className="flex gap-[46px]">
              <p className="text-[13px] lg:text-[20px]">Kontaktlar:</p>
              <p className="text-[12px] font-medium lg:text-[20px]">
                +998 (__) ___-__-__ <br /> t.me/
              </p>
            </div>
            <div className="flex gap-[48px] items-center">
              <p className="text-[13px] lg:text-[20px]">
                Ijtimoiy <br /> tarmoqlar:
              </p>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="flex bg-[#C0D1FF] h-[25px] justify-center rounded-[5px] w-[25px] items-center lg:h-[35px] lg:w-[35px]"
                >
                  <i className="text-[#13265C] text-sm fa-brands fa-telegram lg:text-xl"></i>
                </a>
                <a
                  href="#"
                  className="flex bg-[#C0D1FF] h-[25px] justify-center rounded-[5px] w-[25px] items-center lg:h-[35px] lg:w-[35px]"
                >
                  <i className="text-[#13265C] text-sm fa-brands fa-instagram lg:text-xl"></i>
                </a>
                <a
                  href="#"
                  className="flex bg-[#C0D1FF] h-[25px] justify-center rounded-[5px] w-[25px] items-center lg:h-[35px] lg:w-[35px]"
                >
                  <i className="text-[#13265C] text-sm fa-brands fa-facebook-f lg:text-xl"></i>
                </a>
                <a
                  href="#"
                  className="flex bg-[#C0D1FF] h-[25px] justify-center rounded-[5px] w-[25px] items-center lg:h-[35px] lg:w-[35px]"
                >
                  <i className="text-[#13265C] text-sm fa-brands fa-youtube lg:text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="flex md:w-1/2">
            <iframe
              src="https://www.google.com/maps?q=121-maktab,+Qorasu-4,+Mirzo+Ulug%27bek+tumani,+Toshkent&output=embed"
              width="600"
              style={{borderRadius: "20px"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="text-white pt-[30px] self-start">
          <Link
            to={"/"}
            className="text-lg font-extrabold lg:text-[32px] md:text-2xl uppercase"
          >
            JUNIOR CITIZEN SCIENTIST
          </Link>
          <p className="text-[15px] lg:text-[20px]">
            © 2026 JUNIOR CITIZEN SCIENTIST. Barcha huquqlar himoyalangan
          </p>
        </div>
      </div>
    </footer>
  );
}

