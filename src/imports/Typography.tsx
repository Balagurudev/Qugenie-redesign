function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Text">
      <p className="relative shrink-0 text-[48px]">Inter</p>
      <p className="relative shrink-0 text-[112px]">Ag</p>
    </div>
  );
}

function Typeface() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[64px] items-start not-italic relative shrink-0 text-[#101828] w-full" data-name="Typeface">
      <Text />
      <p className="leading-[60px] relative shrink-0 text-[48px] tracking-[-0.96px] w-full">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        <br aria-hidden="true" />
        abcdefghijklmnopqrstuvwxyz
        <br aria-hidden="true" />
        {`0123456789 !@#$%^&*()`}
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Display 2xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 72px / 4.5rem | Line height: 90px / 5.625rem | Tracking: -2%</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[90px] not-italic relative shrink-0 text-[#101828] text-[72px] tracking-[-1.44px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[72px]">Display 2xl</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[72px]">Display 2xl</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[72px]">Display 2xl</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[72px]">Display 2xl</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Display xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 60px / 3.75rem | Line height: 72px / 4.5rem | Tracking: -2%</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[72px] not-italic relative shrink-0 text-[#101828] text-[60px] tracking-[-1.2px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[60px]">Display xl</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[60px]">Display xl</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[60px]">Display xl</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[60px]">Display xl</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Display lg</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 48px / 3rem | Line height: 60px / 3.75rem | Tracking: -2%</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[60px] not-italic relative shrink-0 text-[#101828] text-[48px] tracking-[-0.96px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[48px]">Display lg</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[48px]">Display lg</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[48px]">Display lg</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[48px]">Display lg</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Display md</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 36px / 2.25rem | Line height: 44px / 2.75rem | Tracking: -2%</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[44px] not-italic relative shrink-0 text-[#101828] text-[36px] tracking-[-0.72px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[36px]">Display md</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[36px]">Display md</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[36px]">Display md</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[36px]">Display md</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Display sm</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 30px / 1.875rem | Line height: 38px / 2.375rem</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[38px] not-italic relative shrink-0 text-[#101828] text-[30px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[30px]">Display sm</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[30px]">Display sm</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[30px]">Display sm</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[30px]">Display sm</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Display xs</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 24px / 1.5rem | Line height: 32px / 2rem</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[24px]">Display xs</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[24px]">Display xs</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[24px]">Display xs</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[24px]">Display xs</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Text xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 20px / 1.25rem | Line height: 30px / 1.875rem</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[20px]">Text xl</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[20px]">Text xl</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[20px]">Text xl</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[20px]">Text xl</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Text lg</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 18px / 1.125rem | Line height: 28px / 1.75rem</p>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[18px]">Text lg</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[18px]">Text lg</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[18px]">Text lg</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[18px]">Text lg</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Text md</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 16px / 1rem | Line height: 24px / 1.5rem</p>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[16px]">Text md</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[16px]">Text md</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[16px]">Text md</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[16px]">Text md</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Text small</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 14px / 0.875rem | Line height: 20px / 1.25rem</p>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[14px]">Text sm</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[14px]">Text sm</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[14px]">Text sm</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[14px]">Text sm</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Header10() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Text xs</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] whitespace-nowrap">Font size: 12px / 0.75rem | Line height: 18px / 1.125rem</p>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[18px] not-italic relative shrink-0 text-[#101828] text-[12px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px min-w-px relative">
        <p className="mb-[12px]">Text xs</p>
        <p>Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-h-px min-w-px relative">
        <p className="mb-[12px]">Text xs</p>
        <p>Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-h-px min-w-px relative">
        <p className="mb-[12px]">Text xs</p>
        <p>Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px min-w-px relative">
        <p className="mb-[12px]">Text xs</p>
        <p>Bold</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[3212px] items-start left-[80px] top-[582px] w-[2240px]" data-name="Content">
      <Typeface />
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header />
        <Row />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header1 />
        <Row1 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header2 />
        <Row2 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header3 />
        <Row3 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header4 />
        <Row4 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header5 />
        <Row5 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header6 />
        <Row6 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header7 />
        <Row7 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header8 />
        <Row8 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header9 />
        <Row9 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
        <Header10 />
        <Row10 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[20px] whitespace-nowrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#101828]">The design Figma UI kit and design system</p>
      <a className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#475467]" href="https://www.untitledui.com">
        <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[30px]">&nbsp;</p>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Footer">
      <Text1 />
    </div>
  );
}

export default function Typography() {
  return (
    <div className="bg-white relative size-full" data-name="Typography">
      <Content />
      <div className="absolute bg-white content-stretch flex flex-col gap-[80px] items-start left-0 pb-[80px] pt-[128px] px-[80px] top-[3858px] w-[2400px]" data-name="Design system footer">
        <Footer />
      </div>
    </div>
  );
}
