import Image from "next/image";

export const HeaderMenu = () => {
  return (
    <div className="flex flex-col bg-slate-200 relative  overflow-x-hidden z-0 p-2">
      <div className="flex items-center w-screen justify-between">
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex items-center gap-1">
            <Image
              height={18}
              width={18}
              src="/instagram.svg"
              alt="instagram epedidos"
            />
            <p className="text-xs">@epedios</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              height={18}
              width={18}
              src="/play.svg"
              alt="playstore epedidos"
            />
            <p className="text-xs">epedios/playstore</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              height={18}
              width={18}
              src="/apple.svg"
              alt="applestore epedidos"
            />
            <p className="text-xs">epedios/applestore</p>
          </div>
        </div>
        <h1 className="text-lg font-medium">E-Pedidos</h1>
        <Image
          height={0}
          width={0}
          src="/logoPrimary.svg"
          alt="logo"
          sizes="100vw"
          style={{
            height: "auto",
            width: "auto",
            maxHeight: "100%",
            maxWidth: "100%",
            marginRight: "1rem",
          }}
        />
      </div>
    </div>
  );
};
