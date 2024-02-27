import { FC } from "react";
import Anchor from "../components/Anchor";
import { Helmet } from "react-helmet-async";

const referal_main_page = "https://www.reg.ru/?rlink=reflink-12245013";
const referal_domain_registration =
  "https://www.reg.ru/domain/new/?rlink=reflink-12245013";
const referal_hosting = "https://www.reg.ru/hosting/?rlink=reflink-12245013";
const referal_cloud = "https://www.reg.ru/vps/cloud/?rlink=reflink-12245013";
const promocode = "9CD1-1415-DCAC-FE8C";

const RegPromo: FC = () => {
  return (
    <>
      <Helmet>
        <title>{"Промокод reg.ru"}</title>
        <meta
          name="description"
          content="Промокод и реферальные ссылки для reg.ru"
        />
        <meta
          name="keywords"
          content="ssl-сертификат, ssl-certificate, промокод, regru, promocode, хостинг, домен, vps, vds, впс, вдс, ссл, reg ru, 2024, ssl, хостинг, домены, покупка, domain, hosting, впс, вдс, сервер, server, arenda"
        />
        <link rel="icon" type="image/svg+xml" href="/Icon.svg" />
      </Helmet>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="lg:max-w-[600px] flex flex-col items-center justify-center gap-4">
          <div className="font-semibold text-4xl">
            Промокод{" "}
            <Anchor
              label="REG.RU"
              link={referal_main_page || ""}
              className="text-4xl"
            />
          </div>
          <p className="font-light text-2xl text-center">
            Для тех, кто хочет получить 5% скидку при заказе{" "}
            <Anchor label="хостинга" link={referal_hosting || ""} />,{" "}
            <Anchor label="домена" link={referal_domain_registration || ""} />,{" "}
            <Anchor label="облачных услуг" link={referal_cloud || ""} /> может
            воспользоваться промокодом
          </p>
          <div>
            <Anchor
              copyOnClick={true}
              link={referal_main_page || ""}
              label={promocode || ""}
              className="text-4xl"
            />
            <div className="text-xl font-light text-slate-500">
              Скопировать промокод и перейти на reg.ru
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegPromo;
