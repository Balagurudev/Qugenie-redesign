import svgPaths from "./svg-fkvg6xd5th";
import imgDesktop12 from "figma:asset/90114e89c7eb09429b2551a7bd8bdfdedddfaf07.png";
import imgImage6 from "figma:asset/f8d662e57fe6d0b33d69ae34270c33454495aff7.png";
import imgImage2 from "figma:asset/58045e4ac9a8c601f93e5434ccab15299421c962.png";
import imgFrame1 from "figma:asset/5c904c09f3f607a7db35fab9bca621893e7ca6b1.png";
import imgFrame2 from "figma:asset/9041ce5cb1ca3e510f4cfccd43fb4e09290dfc8f.png";
import imgFrame3 from "figma:asset/8c0e08e1bdfec81e7868de8d23d4c23a6f1ab514.png";
import imgFrame4 from "figma:asset/ea704c2933abe54013cfbbb25cf752fbf9a97143.png";
import imgFrame5 from "figma:asset/5e7bedc04c9767572943bddf91b1a91f861dd467.png";

function Desktop1() {
  return (
    <div className="h-[1911.087px] relative w-[1440px]" data-name="Desktop - 12">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-42.63%] max-w-none top-[-0.13%] w-[186.63%]" src={imgDesktop12} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.62)] inset-0" />
      </div>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] gap-[24px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Heading and supporting text">
      <p className="leading-[90px] relative shrink-0 text-[72px] text-white w-full">Rule Your Entire Enterprise. From One Sovereign Core.</p>
      <p className="leading-[30px] relative shrink-0 text-[#fcfcfd] text-[20px] w-full">{`QuGenie is the world’s first agentic ERP. It doesn't just store your data; it manages your business automating HR, Finance, and Operations while you focus on the throne.`}</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[28px] py-[16px] relative rounded-[inherit]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#344054] text-[18px] whitespace-nowrap">Read more</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#0040c1] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[28px] py-[16px] relative rounded-[inherit]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Sign up</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#0040c1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center justify-center left-[246px] top-[344px] w-[947px]" data-name="Content">
      <HeadingAndSupportingText />
      <Actions />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#eaecf0] text-[16px] text-left whitespace-nowrap">Programs</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-16.67%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndBadge() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-left text-white w-[322px]">{`Artificial Intelligence & Machine Learning `}</p>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndBadge />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[320px]" data-name="Content">
      <TextAndSupportingText />
    </div>
  );
}

function NavMenuItem() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="_Nav menu item">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
        <Content3 />
      </div>
    </div>
  );
}

function TextAndBadge1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-left text-white whitespace-nowrap">{` Full Stack Development`}</p>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndBadge1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Content">
      <TextAndSupportingText1 />
    </div>
  );
}

function NavMenuItem1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="_Nav menu item">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
        <Content4 />
      </div>
    </div>
  );
}

function TextAndBadge2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-left text-white whitespace-nowrap">{`Digital Marketing Specialist `}</p>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndBadge2 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Content">
      <TextAndSupportingText2 />
    </div>
  );
}

function NavMenuItem2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="_Nav menu item">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
        <Content5 />
      </div>
    </div>
  );
}

function TextAndBadge3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-left text-white whitespace-nowrap">Robotics</p>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndBadge3 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Content">
      <TextAndSupportingText3 />
    </div>
  );
}

function NavMenuItem3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="_Nav menu item">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
        <Content6 />
      </div>
    </div>
  );
}

function TextAndBadge4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-left text-white whitespace-nowrap">{`Data Scientist `}</p>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndBadge4 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Content">
      <TextAndSupportingText4 />
    </div>
  );
}

function NavMenuItem4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="_Nav menu item">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
        <Content7 />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
        <NavMenuItem />
        <NavMenuItem1 />
        <NavMenuItem2 />
        <NavMenuItem3 />
        <NavMenuItem4 />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#080411] content-stretch flex flex-col items-start left-[calc(50%+37.5px)] rounded-[12px] top-[39px] w-[368px]" data-name="Menu">
      <div aria-hidden="true" className="absolute border border-[#d6bbfb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_0px_rgba(16,24,40,0.08),0px_4px_6px_0px_rgba(16,24,40,0.03)]" />
      <Content2 />
    </div>
  );
}

function DropdownHeaderNavigationTrigger() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center pb-[3px] pt-[4px] relative shrink-0" data-name="_Dropdown header navigation trigger">
      <Button />
      <Menu />
    </button>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navigation">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#eaecf0] text-[16px] whitespace-nowrap">Home</p>
      </div>
      <DropdownHeaderNavigationTrigger />
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#eaecf0] text-[16px] whitespace-nowrap">Contact Us</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[478px] h-[31px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="absolute content-stretch flex gap-[40px] items-center left-0 overflow-clip top-0" data-name="Content">
        <Navigation />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[61px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full scale-[1.2]" src="/qugenie-logo.png" />
      </div>
      <Content1 />
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="_Navigation actions">
        <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[18px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#eaecf0] text-[16px] whitespace-nowrap">Log in</p>
        </div>
        <div className="bg-[#0040c1] relative rounded-[8px] shrink-0" data-name="Button">
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[18px] py-[10px] relative rounded-[inherit]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Sign up</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#0040c1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[56px] top-[23px] w-[1280px]" data-name="Header">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex flex-col gap-[32px] h-[1024px] items-center justify-center left-0 overflow-clip top-0 w-[1440px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Desktop1 />
        </div>
      </div>
      <div className="bg-black flex-[1_0_0] min-h-px min-w-px w-full" data-name="Rectangle" />
      <Content />
      <Header />
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[1024px] relative shrink-0 w-[1440px]">
      <Container />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative self-stretch shrink-0 w-[457px]" data-name="Frame">
      <div className="content-stretch flex flex-col items-start justify-between py-[20px] relative size-full">
        <div className="absolute h-[1057px] left-[-828px] top-[-128px] w-[2114px]" data-name="image 2">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
            <div className="absolute bg-[rgba(0,0,0,0.42)] inset-0" />
          </div>
        </div>
        <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white w-[457px]">
          <p className="leading-[60px]">Built for Efficiency: The Fastest Path to Business Clarity</p>
        </div>
        <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[457px]">
          <p className="leading-[30px]">{`Growing MSMEs need results now. QuGenie meets that demand with pre-built modules, a shared data core, and a deployment model that fits your infrastructure `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[672px] relative rounded-[20px] shrink-0 w-[518px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame1} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f9f9fb] content-stretch flex gap-[45px] items-start overflow-clip px-[50px] py-[30px] relative rounded-[20px] shrink-0 w-[1120px]" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[64px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1440px]" data-name="About Us">
      <Frame />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[492px]" data-name="Frame">
      <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[16px] w-[492px]">
        <p className="leading-[24px]">Choose where you need to start: HR, Sales, CRM, or Finance. Every module connects to a single shared database for total visibility.</p>
      </div>
      <div className="bg-[#0040c1] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[18px] py-[10px] relative rounded-[inherit]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Sign up</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#0040c1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1120px]" data-name="Frame">
      <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[48px] w-[604px]">
        <p className="leading-[60px]">Solutions Across the Full Business Lifecycle</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[400px] relative rounded-[4px] shrink-0 w-[352px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgFrame2} />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[250px] items-start justify-center relative shrink-0 w-[736px]" data-name="Frame">
      <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">HRMS</p>
      </div>
      <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[16px] w-[736px]">
        <p className="leading-[24px]">Hire, onboard, manage leaves, run payroll, and track employee performance — all from a single HR command centre.</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#0040c1] text-[16px] whitespace-nowrap">Know more</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-right">
          <div className="absolute inset-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p19aed710} id="Icon" stroke="var(--stroke-0, #0040C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pb-[32px] relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-b border-solid inset-0 pointer-events-none" />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[250px] items-start justify-center relative shrink-0 w-[736px]" data-name="Frame">
      <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">{`Sales & Order Management`}</p>
      </div>
      <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[16px] w-[736px]">
        <p className="leading-[24px]">Manage leads, quotations, purchase orders, invoicing, and delivery tracking in one connected sales pipeline.</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#0040c1] text-[16px] whitespace-nowrap">Know more</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-right">
          <div className="absolute inset-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p19aed710} id="Icon" stroke="var(--stroke-0, #0040C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[400px] relative rounded-[4px] shrink-0 w-[352px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgFrame3} />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pb-[32px] relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-b border-solid inset-0 pointer-events-none" />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[400px] relative rounded-[4px] shrink-0 w-[352px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgFrame4} />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[250px] items-start justify-center relative shrink-0 w-[736px]" data-name="Frame">
      <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">CRM</p>
      </div>
      <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[16px] w-[736px]">
        <p className="leading-[24px]">Track every customer interaction, manage follow-ups, and convert more leads with a CRM built into your ERP — not bolted on.</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#0040c1] text-[16px] whitespace-nowrap">Know more</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-right">
          <div className="absolute inset-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p19aed710} id="Icon" stroke="var(--stroke-0, #0040C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pb-[32px] relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-b border-solid inset-0 pointer-events-none" />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[250px] items-start justify-center relative shrink-0 w-[736px]" data-name="Frame">
      <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">{`Finance & Accounts`}</p>
      </div>
      <div className="flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[16px] w-[736px]">
        <p className="leading-[24px]">GST-compliant accounting, accounts payable/receivable, balance sheets, and real-time financial dashboards at your fingertips.</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#0040c1] text-[16px] whitespace-nowrap">Know more</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-right">
          <div className="absolute inset-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p19aed710} id="Icon" stroke="var(--stroke-0, #0040C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[400px] relative rounded-[4px] shrink-0 w-[352px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute h-full left-[-65.32%] max-w-none top-[0.03%] w-[187.98%]" src={imgFrame5} />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pb-[32px] relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-b border-solid inset-0 pointer-events-none" />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Frame">
      <Frame8 />
      <Frame11 />
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center justify-center px-[15px] py-[100px] relative w-full">
          <Frame5 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1440px]" data-name="Services">
      <Frame4 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop - 9">
      <Frame20 />
      <AboutUs />
      <Services />
    </div>
  );
}
