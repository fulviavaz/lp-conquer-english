
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between w-full bg-black py-4 2xl:px-20 px-10">
        <Image src="/itauuniclass/minhasvantagens/conquerenglish/images/itau.png" alt="logo itau" width={44} height={44} />
        <Image src="/itauuniclass/minhasvantagens/conquerenglish/images/conquer-english.png" alt="logo conquer" width={136} height={42}/>
      </nav>

        
      {/* hero */}
    <div className="flex flex-wrap-reverse gap-10 items-center justify-between w-full bg-[#0131FF] py-24 2xl:px-30 xl:px-40 lg:px-30 px-10">
        <div className="2xl:w-[500px] xl:w-[500px] lg:w-[500px] flex flex-col">
          <h1 className="text-white 2xl:text-4xl xl:text-4xl lg:text-4xl text-2xl font-bold ">Conquer e Uniclass<br/>
            Uma parceria para<br/> investir no seu futuro</h1>
          <p className="text-lg font-semibold text-white mt-10">Aproveite os descontos exclusivos minhas vantagens!</p>
        </div>
        <div>
          <Image src="/itauuniclass/minhasvantagens/conquerenglish/images/cenglish.png" alt="logo itau" width={616} height={130} />
        </div>
        </div>
    <main className="flex flex-col items-center justify-between max-w-[1280px] mx-auto">
    

      {/* <div className="2xl:px-20 px-10 flex flex-col items-start justify-start w-full gap-6">
        <h2 className="text-2xl text-text-a font-bold">Garanta seu desconto</h2>
        <Button className=" bg-yellow-main text-black text-lg font-bold 2xl:w-80 xl:w-80 lg:w-80 w-full h-12"><Link href="https://pagamento.escolaconquer.com.br/CW-14082024145915049CRSTNHLND?utm_source=ITAU&utm_medium=ITAU&utm_campaign=ITAU&utm_id=ITAU&utm_term=ITAU&utm_content=ITAU" target="_blank">Ir para a Conquer </Link></Button>
        <p className="text-text-a text-3xl font-bold">Fale inglês com confiança e acelere a sua carreira de forma assertiva.</p>
      </div>  */}
              
      <div className="2xl:px-20 px-10 w-full  mt-14 flex flex-wrap items-center justify-center 2xl:gap-32">     
        <div className="flex items-center justify-center"><Image src="/itauuniclass/minhasvantagens/conquerenglish/images/celphone.png" alt="telefone" width={415} height={488}/></div>
        <div className="flex items-center justify-center 2xl:w-[261px] xl:w-[261px] w-auto">
          <p className="text-text-a text-[29px]  leading-7 font-normal text-start">Ganhe fluência para fazer negócios, alavancar sua carreira e destravar todas as oportunidades que o mundo pode  te oferecer.</p>
        </div>         
      </div>

      <div className="2xl:px-20 px-10 w-full  2xl:mt-14 mt-10 flex flex-col items-start justify-center ">
        <p className="text-text-a 2xl:text-[28px] xl:text-[28px] text-[22px] font-bold">Junte-se a mais de 8.000 profissionais comprometidos em alavancar suas carreiras com o Conquer English</p>
        <p className="text-text-a 2xl:text-[22px] xl:text-[22px] text-[18px] font-normal mt-8">Iniciando do zero e com uma dedicação de 5 horas semanais você pode conquistar sua fluência em 1 ano e 6 meses! 🤩 Está nas suas mãos definir em quanto tempo vai acelerar a sua carreira. E agora é sua chance de começar tudo isso!</p>
        <Link href="https://cnqr.com.br/r/itau" target="_blank">
          <Button className=" bg-yellow-main text-black text-lg font-bold 2xl:w-80 xl:w-80 lg:w-80 w-full h-12 mt-8 ">
          Comece agora </Button> </Link> 
          <p className="text-black text-sm font-normal mb-6 mt-6">Ao escolher o curso desejado, você será direcionado para página de check-out.
            Preencha os dados do cartão e, no campo “possui cupom?”, insira o cupom <strong>ITAUENGLISH</strong> para garantir o desconto e seguir com o pagamento.</p> 
      </div>

      <div className="2xl:px-20 px-10 w-full mb-14 mt-14 flex flex-wrap items-center justify-center gap-14">
        <div className="flex items-center justify-center">
          <Image src="/itauuniclass/minhasvantagens/conquerenglish/images/carreira.png" alt="carreira" width={364} height={387} />
        </div>
        <div className="flex items-center justify-center w-[399px] ">
            <ul className="list-disc list-inside ">
    <li className="text-black 2xl:text-lg font-bold leading-6">
      500h de conteúdo gravado
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Estude onde e quando quiser
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Foco na prática e na conversação
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Material didático exclusivo
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Aulas 100% online com certificado a cada módulo finalizado
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Inteligência artificial IBM Watson para correção de exercícios
            </li>
            <li className="text-black 2xl:text-lg font-bold leading-6">
              Chat para tirar dúvidas com o professor
            </li>  
            <li className="text-black 2xl:text-lg font-bold leading-6">
              Desbrave as habilidades que só os melhores profissionais do mercado dominam em inglês
            </li>
            <li className="text-black 2xl:text-lg font-bold leading-6">
              E muito mais.
            </li>
  </ul>
        </div>
      </div>
      <div className="2xl:px-20 px-10 w-full  mb-14 flex flex-col items-start justify-center ">
      <Link href="https://cnqr.com.br/r/itau" target="_blank">
        <Button className=" bg-yellow-main text-black text-lg font-bold 2xl:w-80 xl:w-80 lg:w-80 w-full h-12 mt-8 ">
          Comece agora </Button>  </Link>
          <p className="text-black text-sm font-normal mb-6 mt-6">Ao escolher o curso desejado, você será direcionado para página de check-out.
            Preencha os dados do cartão e, no campo “possui cupom?”, insira o cupom <strong>ITAUENGLISH</strong> para garantir o desconto e seguir com o pagamento.</p>       
      </div>

    
    
      </main>
        <footer className="flex flex-wrap items-center justify-center gap-6 w-full bg-black py-8 2xl:px-20 px-10">
        <p className="text-white text-sm ">Powered by</p>
        <Image src="/itauuniclass/minhasvantagens/conquerenglish/images/indico.png" alt="logo itau" width={81} height={25} />
        <p className="text-white text-[8px] 2xl:text-xs ">CAOS SISTEMAS DINÂMICOS E COMPLEXOS LTDA - Brasil - CNPJ 05.934.733/0001-17</p>
      </footer>
      </>
  );
}
