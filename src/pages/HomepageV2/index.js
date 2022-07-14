import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Line,
  Stack,
  Slider,
  PagerIndicator,
  List,
  RatingBar,
} from "components";

const HomepageV2Page = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]"
        compId="9:513"
        comWidth={1920}
        comHeight={5176}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="51"
          comWidth={1920}
          comHeight={171}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Column
            className="bg-white_A700 items-center w-[100%]"
            compId="234"
            comWidth={1920}
            comHeight={171}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[85%]"
              compId="9:922"
              comWidth={1632}
              comHeight={53}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Row
                className="items-center mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[7%]"
                compId="9:934"
                comWidth={112}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_group19.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                  compId="9:936"
                  comWidth={39}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group19"
                />
                <Text
                  className="cursor-pointer font-bold hover:font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:935"
                  comWidth={65}
                  comHeight={36}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Elliye
                </Text>
              </Row>
              <Row
                className="bg-white_A700 border-2 border-gray_50 border-solid items-center justify-center lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[239px] xl:ml-[274px] 2xl:ml-[308px] 3xl:ml-[370px] ml-[411px] w-[36%]"
                compId="199"
                comWidth={586}
                comHeight={48}
                compLeft={411}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="cursor-pointer hover:font-normal font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic opacity-op5 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 hover:text-gray_800 w-[auto]"
                  compId="9:925"
                  comWidth={109}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Text"
                >
                  Search here
                </Text>
                <Img
                  src="images/img_search.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[357px] ml-[397px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  compId="9:926"
                  comWidth={48}
                  comHeight={48}
                  compLeft={397}
                  compRight={0}
                  compType="Image"
                  alt="search"
                />
              </Row>
              <Img
                src="images/img_icon_5.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] mb-[17px] lg:mb-[9px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain w-[5%]"
                compId="9:939"
                comWidth={80}
                comHeight={24}
                compLeft={304}
                compRight={0}
                compType="Image"
                alt="icon"
              />
              <Button
                className="bg-gray_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:py-[10px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] py-[17.2px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-center text-white_A700 w-[7%]"
                compId="49"
                comWidth={107}
                comHeight={53}
                compLeft={32}
                compRight={0}
                compType="Button"
              >
                Login
              </Button>
            </Row>
            <Line
              className="bg-gray_50 h-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[85%]"
              compId="9:915"
              comWidth={1632}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-center lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[24px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[41%]"
              compId="9:916"
              comWidth={778}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Text
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                compId="9:917"
                comWidth={100}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Categories
              </Text>
              <Text
                className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                compId="9:918"
                comWidth={101}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >
                New Arrival
              </Text>
              <Text
                className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                compId="9:919"
                comWidth={78}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >
                Features
              </Text>
              <Text
                className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                compId="9:920"
                comWidth={100}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >
                Collections
              </Text>
              <Text
                className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                compId="9:921"
                comWidth={79}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >
                Discount
              </Text>
            </Row>
          </Column>
        </header>
        <Stack
          className="lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px] w-[100%]"
          compId="245"
          comWidth={1920}
          comHeight={750}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Slider
            autoPlay
            autoPlayInterval={2000}
            slidesToShow={1}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="absolute inset-[0] w-[100%]"
            items={[...Array(6)].map(() => (
              <>
                <Stack
                  className="lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px]"
                  compId="247"
                  comWidth={1920}
                  comHeight={750}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Img
                    src="images/img_image1.png"
                    className="absolute lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px] inset-[0] object-cover w-[100%]"
                    compId="9:683"
                    comWidth={1920}
                    comHeight={750}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image1"
                  />
                  <Column
                    className="absolute bg-black_900_68 inset-[0] justify-end w-[100%]"
                    compId="9:692"
                    comWidth={1920}
                    comHeight={750}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="3xl:mt-[106px] mt-[118px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[42%]"
                      compId="9:693"
                      comWidth={800}
                      comHeight={300}
                      compLeft={144}
                      compRight={144}
                      compType="Column"
                    >
                      <Text
                        className="font-medium font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                        compId="9:695"
                        comWidth={251}
                        comHeight={36}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >
                        50% Off Limited Offer
                      </Text>
                      <Text
                        className="font-bold font-playfairdisplay lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] 3xl:text-[115px] text-[128px] lg:text-[74px] xl:text-[85px] 2xl:text-[96px] text-white_A700 w-[auto]"
                        compId="9:694"
                        comWidth={800}
                        comHeight={256}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Summer <br />
                        Collection
                      </Text>
                    </Column>
                    <Row
                      className="bg-gray_800 items-center 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] mr-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[13%]"
                      compId="200"
                      comWidth={245}
                      comHeight={60}
                      compLeft={144}
                      compRight={144}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                        compId="9:697"
                        comWidth={121}
                        comHeight={36}
                        compLeft={33}
                        compRight={0}
                        compType="Text"
                      >
                        Shop Now
                      </Text>
                      <Img
                        src="images/img_arrow_2.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="9:698"
                        comWidth={48}
                        comHeight={48}
                        compLeft={10}
                        compRight={33}
                        compType="Image"
                        alt="Arrow"
                      />
                    </Row>
                    <Column
                      className="items-end lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] w-[100%]"
                      compId="277"
                      comWidth={1920}
                      comHeight={160}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Stack
                        className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] overflow-auto w-[56%]"
                        compId="249"
                        comWidth={1082}
                        comHeight={160}
                        compLeft={10}
                        compRight={0}
                        compType="Stack"
                      >
                        <Stack
                          className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] right-[0] w-[100%]"
                          compId="251"
                          comWidth={1216}
                          comHeight={160}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Stack
                            className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]"
                            compId="253"
                            comWidth={1216}
                            comHeight={160}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Stack
                              className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]"
                              compId="255"
                              comWidth={1216}
                              comHeight={160}
                              compLeft={0}
                              compRight={0}
                              compType="Stack"
                            >
                              <Stack
                                className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]"
                                compId="257"
                                comWidth={1216}
                                comHeight={160}
                                compLeft={0}
                                compRight={0}
                                compType="Stack"
                              >
                                <Stack
                                  className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]"
                                  compId="259"
                                  comWidth={1216}
                                  comHeight={160}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Stack"
                                >
                                  <Stack
                                    className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]"
                                    compId="261"
                                    comWidth={1216}
                                    comHeight={160}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Stack"
                                  >
                                    <div
                                      className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] shadow-bs1 w-[100%]"
                                      compId="28.11"
                                      comWidth={1216}
                                      comHeight={160}
                                      compLeft={0}
                                      compRight={0}
                                      compType="View"
                                    ></div>
                                    <Column
                                      className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center left-[0] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                                      compId="9:704"
                                      comWidth={160}
                                      comHeight={160}
                                      compLeft={0}
                                      compRight={0}
                                      compType="Column"
                                    >
                                      <Img
                                        src="images/img_sweater_1.svg"
                                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                        compId="9:705"
                                        comWidth={56}
                                        comHeight={56}
                                        compLeft={10}
                                        compRight={10}
                                        compType="Image"
                                        alt="Sweater"
                                      />
                                      <Text
                                        className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                                        compId="9:707"
                                        comWidth={60}
                                        comHeight={27}
                                        compLeft={10}
                                        compRight={10}
                                        compType="Text"
                                      >
                                        Jacket
                                      </Text>
                                    </Column>
                                  </Stack>
                                  <Column
                                    className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center left-[14%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                                    compId="9:710"
                                    comWidth={160}
                                    comHeight={160}
                                    compLeft={176}
                                    compRight={0}
                                    compType="Column"
                                  >
                                    <Img
                                      src="images/img_tshirt_1.svg"
                                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                      compId="9:711"
                                      comWidth={56}
                                      comHeight={56}
                                      compLeft={10}
                                      compRight={10}
                                      compType="Image"
                                      alt="Tshirt"
                                    />
                                    <Text
                                      className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                                      compId="9:713"
                                      comWidth={40}
                                      comHeight={27}
                                      compLeft={10}
                                      compRight={10}
                                      compType="Text"
                                    >
                                      Shirt
                                    </Text>
                                  </Column>
                                </Stack>
                                <Column
                                  className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center left-[29%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                                  compId="9:716"
                                  comWidth={160}
                                  comHeight={160}
                                  compLeft={352}
                                  compRight={0}
                                  compType="Column"
                                >
                                  <Img
                                    src="images/img_pants_1.svg"
                                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                    compId="9:717"
                                    comWidth={56}
                                    comHeight={56}
                                    compLeft={10}
                                    compRight={10}
                                    compType="Image"
                                    alt="Pants"
                                  />
                                  <Text
                                    className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                                    compId="9:719"
                                    comWidth={51}
                                    comHeight={27}
                                    compLeft={10}
                                    compRight={10}
                                    compType="Text"
                                  >
                                    Pants
                                  </Text>
                                </Column>
                              </Stack>
                              <Column
                                className="absolute bg-gray_800 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-x-[43%] inset-y-[0] items-center justify-center xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                                compId="9:722"
                                comWidth={160}
                                comHeight={160}
                                compLeft={528}
                                compRight={528}
                                compType="Column"
                              >
                                <Img
                                  src="images/img_boot_1.svg"
                                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                  compId="9:723"
                                  comWidth={56}
                                  comHeight={56}
                                  compLeft={10}
                                  compRight={10}
                                  compType="Image"
                                  alt="Boot"
                                />
                                <Text
                                  className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                                  compId="9:725"
                                  comWidth={55}
                                  comHeight={27}
                                  compLeft={10}
                                  compRight={10}
                                  compType="Text"
                                >
                                  Shoes
                                </Text>
                              </Column>
                            </Stack>
                            <Column
                              className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center right-[29%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                              compId="9:728"
                              comWidth={160}
                              comHeight={160}
                              compLeft={0}
                              compRight={352}
                              compType="Column"
                            >
                              <Img
                                src="images/img_dress_1.svg"
                                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                compId="9:729"
                                comWidth={56}
                                comHeight={56}
                                compLeft={10}
                                compRight={10}
                                compType="Image"
                                alt="Dress"
                              />
                              <Text
                                className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                                compId="9:731"
                                comWidth={50}
                                comHeight={27}
                                compLeft={10}
                                compRight={10}
                                compType="Text"
                              >
                                Dress
                              </Text>
                            </Column>
                          </Stack>
                          <Column
                            className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center right-[14%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                            compId="9:734"
                            comWidth={160}
                            comHeight={160}
                            compLeft={0}
                            compRight={176}
                            compType="Column"
                          >
                            <Img
                              src="images/img_belt_1.svg"
                              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                              compId="9:735"
                              comWidth={56}
                              comHeight={56}
                              compLeft={10}
                              compRight={10}
                              compType="Image"
                              alt="Belt"
                            />
                            <Text
                              className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                              compId="9:737"
                              comWidth={98}
                              comHeight={27}
                              compLeft={10}
                              compRight={10}
                              compType="Text"
                            >
                              Accesories
                            </Text>
                          </Column>
                        </Stack>
                        <Column
                          className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center right-[0] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                          compId="9:740"
                          comWidth={160}
                          comHeight={160}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Img
                            src="images/img_skirt.svg"
                            className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                            compId="9:741"
                            comWidth={56}
                            comHeight={56}
                            compLeft={10}
                            compRight={10}
                            compType="Image"
                            alt="Skirt"
                          />
                          <Text
                            className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                            compId="9:743"
                            comWidth={38}
                            comHeight={27}
                            compLeft={10}
                            compRight={10}
                            compType="Text"
                          >
                            Skirt
                          </Text>
                        </Column>
                      </Stack>
                    </Column>
                  </Column>
                </Stack>
              </>
            ))}
            Indicator={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800 absolute" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700 absolute"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="absolute bottom-[4%] h-[12px] left-[8%] w-[auto]"
            compId="50"
            comWidth={112}
            comHeight={12}
            compLeft={144}
            compRight={0}
            compType="PagerIndicator"
            count={6}
            activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800 absolute"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700 absolute"
            sliderRef={sliderRef}
            selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
            unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
          />
        </Stack>
        <Img
          src="images/img_brands.svg"
          className="h-[100px] lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] object-contain w-[56%]"
          compId="9:744"
          comWidth={1078}
          comHeight={100}
          compLeft={10}
          compRight={10}
          compType="Image"
          alt="brands"
        />
        <Row
          className="items-center mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]"
          compId="9:547"
          comWidth={1633}
          comHeight={832}
          compLeft={10}
          compRight={10}
          compType="Row"
        >
          <Column
            className="items-center w-[49%]"
            compId="9:548"
            comWidth={800}
            comHeight={832}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
              compId="263"
              comWidth={800}
              comHeight={400}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_placeholder_23.png"
                className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                compId="9:555"
                comWidth={800}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Text
                className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 w-[28%]"
                compId="9:556"
                comWidth={227}
                comHeight={116}
                compLeft={82.44}
                compRight={0}
                compType="Text"
              >
                <span className="text-white_A700 font-poppins">
                  Casual
                  <br />
                </span>
                <span className="text-white_A700 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                  Collection
                </span>
              </Text>
            </Stack>
            <Stack
              className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="265"
              comWidth={800}
              comHeight={400}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_placeholder_24.png"
                className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                compId="9:551"
                comWidth={800}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Text
                className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[11%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[28%]"
                compId="9:552"
                comWidth={227}
                comHeight={116}
                compLeft={90.25}
                compRight={0}
                compType="Text"
              >
                <span className="text-gray_800 font-poppins">
                  Summer <br />
                </span>
                <span className="text-gray_800 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                  Collection
                </span>
              </Text>
            </Stack>
          </Column>
          <Stack
            className="lg:h-[486px] xl:h-[556px] 2xl:h-[625px] 3xl:h-[750px] h-[832px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[49%]"
            compId="267"
            comWidth={801}
            comHeight={832}
            compLeft={32}
            compRight={0}
            compType="Stack"
          >
            <Img
              src="images/img_placeholder_25.png"
              className="absolute lg:h-[486px] xl:h-[556px] 2xl:h-[625px] 3xl:h-[750px] h-[832px] inset-[0] object-cover w-[100%]"
              compId="9:559"
              comWidth={801}
              comHeight={832}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="absolute font-normal leading-[normal] left-[10%] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 top-[37%] w-[28%]"
              compId="9:560"
              comWidth={227}
              comHeight={116}
              compLeft={79.64}
              compRight={0}
              compType="Text"
            >
              <span className="text-white_A700 font-poppins">
                Big Vibe <br />
              </span>
              <span className="text-white_A700 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                Collection
              </span>
            </Text>
          </Stack>
        </Row>
        <Column
          className="items-center mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]"
          compId="9:607"
          comWidth={1632}
          comHeight={853}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compId="9:608"
            comWidth={1632}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]"
              compId="9:609"
              comWidth={168}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Featured
            </Text>
            <Row
              className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]"
              compId="9:610"
              comWidth={110}
              comHeight={31}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium my-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                compId="9:611"
                comWidth={70}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                View all
              </Text>
              <Img
                src="images/img_arrow_1.svg"
                className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] object-contain w-[29%]"
                compId="9:612"
                comWidth={32}
                comHeight={31}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Arrow"
              />
            </Row>
          </Row>
          <Row
            className="items-center justify-between lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]"
            compId="9:615"
            comWidth={1632}
            comHeight={768}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Stack
              className="lg:h-[444px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] h-[761px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] w-[32%]"
              compId="269"
              comWidth={523}
              comHeight={761}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_placeholder_26.png"
                className="absolute lg:h-[444px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] h-[761px] inset-[0] object-cover w-[100%]"
                compId="9:678"
                comWidth={523}
                comHeight={761}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Text
                className="absolute font-normal inset-x-[0] leading-[normal] mx-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-center text-gray_800 top-[7%] w-[61%]"
                compId="9:679"
                comWidth={321}
                comHeight={108}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-gray_800 font-poppins">
                  Discover Our <br />
                </span>
                <span className="text-gray_800 font-poppins font-bold">
                  Featured Product
                </span>
              </Text>
            </Stack>
            <List
              className="gap-[0] min-h-[auto] w-[66%]"
              compId="9:616"
              comWidth={1077}
              comHeight={768}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="vertical"
            >
              <Row
                className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] px-[0] w-[100%]"
                compId="9:617"
                comWidth={1077}
                comHeight={368}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="9:632"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_rectangle39.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="9:637"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle39"
                  />
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]"
                    compId="9:633"
                    comWidth={162}
                    comHeight={107}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]"
                      compId="9:634"
                      comWidth={162}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Green <br />
                      Warm Jacket
                    </Text>
                    <Text
                      className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:635"
                      comWidth={45}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compId="9:625"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_rectangle39_1.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="9:630"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle39"
                  />
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]"
                    compId="9:626"
                    comWidth={162}
                    comHeight={107}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]"
                      compId="9:627"
                      comWidth={162}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Black
                      <br />
                      Warm Jacket
                    </Text>
                    <Text
                      className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:628"
                      comWidth={45}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compId="9:618"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_rectangle39_2.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="9:623"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle39"
                  />
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]"
                    compId="9:619"
                    comWidth={162}
                    comHeight={107}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]"
                      compId="9:620"
                      comWidth={162}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Blue Grey <br />
                      Warm Jacket
                    </Text>
                    <Text
                      className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:621"
                      comWidth={45}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compId="9:639"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_rectangle39_3.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="9:641"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle39"
                  />
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[58%]"
                    compId="9:643"
                    comWidth={143}
                    comHeight={107}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]"
                      compId="9:644"
                      comWidth={143}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Blue Denim <br />
                      Jacket
                    </Text>
                    <Text
                      className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:645"
                      comWidth={45}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row
                className="justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="9:646"
                comWidth={1077}
                comHeight={368}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-center w-[23%]"
                  compId="9:661"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_rectangle39_4.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="9:666"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle39"
                  />
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[45%]"
                    compId="9:662"
                    comWidth={111}
                    comHeight={107}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]"
                      compId="9:663"
                      comWidth={111}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Casual <br />
                      Pink Shirt
                    </Text>
                    <Text
                      className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:664"
                      comWidth={45}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] w-[23%]"
                  compId="9:654"
                  comWidth={245}
                  comHeight={332}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_rectangle39_5.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="9:659"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle39"
                  />
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[59%]"
                    compId="9:655"
                    comWidth={145}
                    comHeight={71}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:656"
                      comWidth={145}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Gray T-shirt
                    </Text>
                    <Text
                      className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:657"
                      comWidth={45}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center w-[23%]"
                  compId="9:647"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_rectangle39_6.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="9:652"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle39"
                  />
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]"
                    compId="9:648"
                    comWidth={162}
                    comHeight={107}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]"
                      compId="9:649"
                      comWidth={162}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Purple <br />
                      Warm Jacket
                    </Text>
                    <Text
                      className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:650"
                      comWidth={45}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] w-[23%]"
                  compId="9:668"
                  comWidth={245}
                  comHeight={332}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_rectangle39_4.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="9:670"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle39"
                  />
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[57%]"
                    compId="9:672"
                    comWidth={140}
                    comHeight={71}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:673"
                      comWidth={140}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Red Flannel
                    </Text>
                    <Text
                      className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:674"
                      comWidth={45}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                </Column>
              </Row>
            </List>
          </Row>
        </Column>
        <Stack
          className="lg:h-[338px] xl:h-[387px] 2xl:h-[435px] 3xl:h-[522px] h-[579px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="271"
          comWidth={1920}
          comHeight={579}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute bg-gray_800 items-center top-[0] w-[100%]"
            compId="46"
            comWidth={1920}
            comHeight={413}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:mb-[183px] xl:mb-[209px] 2xl:mb-[235px] 3xl:mb-[282px] mb-[314px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 w-[auto]"
              compId="9:748"
              comWidth={238}
              comHeight={54}
              compLeft={144}
              compRight={144}
              compType="Text"
            >
              Limited Offer
            </Text>
          </Column>
          <List
            className="absolute bottom-[0] lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 inset-x-[0] min-h-[auto] mx-[auto] w-[85%]"
            compId="9:749"
            comWidth={1632}
            comHeight={435}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Row
              className="bg-gray_50 items-center shadow-bs2 w-[100%]"
              compId="213"
              comWidth={800}
              comHeight={435}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[35%]"
                compId="9:773"
                comWidth={279}
                comHeight={371}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_rectangle45.png"
                  className="lg:h-[163px] xl:h-[187px] 2xl:h-[210px] 3xl:h-[252px] h-[279px] object-cover lg:w-[162px] xl:w-[186px] 2xl:w-[209px] 3xl:w-[251px] w-[279px]"
                  compId="9:778"
                  comWidth={279}
                  comHeight={279}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle45"
                />
                <Button
                  className="bg-gray_800 font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.05px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[72%]"
                  compId="47"
                  comWidth={200}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >
                  Add to Cart
                </Button>
              </Column>
              <Column
                className="lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:mr-[32px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] mr-[56px] lg:my-[45px] xl:my-[52px] 2xl:my-[58px] 3xl:my-[70px] my-[78px] w-[48%]"
                compId="212"
                comWidth={385}
                comHeight={279}
                compLeft={48}
                compRight={56}
                compType="Column"
              >
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:755"
                  comWidth={160}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  Limited Deals
                </Text>
                <Column
                  className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="278"
                  comWidth={385}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-between px-[0] w-[100%]"
                    compId="9:757"
                    comWidth={385}
                    comHeight={107}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="9:760"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:761"
                        comWidth={31}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >
                        08
                      </Text>
                      <Text
                        className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                        compId="9:762"
                        comWidth={52}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >
                        Hours
                      </Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="9:765"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:766"
                        comWidth={31}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >
                        58
                      </Text>
                      <Text
                        className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                        compId="9:767"
                        comWidth={71}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >
                        Minutes
                      </Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="9:769"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:770"
                        comWidth={24}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >
                        18
                      </Text>
                      <Text
                        className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] 2xl:mr-[10px] 3xl:mr-[12px] mr-[14px] xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                        compId="9:771"
                        comWidth={78}
                        comHeight={27}
                        compLeft={15}
                        compRight={14}
                        compType="Text"
                      >
                        Seconds
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:756"
                  comWidth={240}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  Black Warm Jacket
                </Text>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="279"
                  comWidth={385}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center w-[100%]"
                    compId="209"
                    comWidth={385}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal line-through not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                      compId="9:753"
                      comWidth={59}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      $299
                    </Text>
                    <Text
                      className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[144px] xl:mr-[164px] 2xl:mr-[185px] 3xl:mr-[222px] mr-[247px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:754"
                      comWidth={55}
                      comHeight={36}
                      compLeft={24}
                      compRight={247}
                      compType="Text"
                    >
                      $199
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Row>
            <Row
              className="bg-gray_50 items-center justify-center shadow-bs2 w-[100%]"
              compId="218"
              comWidth={800}
              comHeight={435}
              compLeft={32}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[35%]"
                compId="9:802"
                comWidth={279}
                comHeight={371}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_rectangle45_1.png"
                  className="lg:h-[163px] xl:h-[187px] 2xl:h-[210px] 3xl:h-[252px] h-[279px] object-cover lg:w-[162px] xl:w-[186px] 2xl:w-[209px] 3xl:w-[251px] w-[279px]"
                  compId="9:807"
                  comWidth={279}
                  comHeight={279}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle45"
                />
                <Button
                  className="bg-gray_800 font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.05px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[72%]"
                  compId="48"
                  comWidth={200}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >
                  Add to Cart
                </Button>
              </Column>
              <Column
                className="lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:mr-[32px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] mr-[56px] lg:my-[45px] xl:my-[52px] 2xl:my-[58px] 3xl:my-[70px] my-[78px] w-[48%]"
                compId="217"
                comWidth={385}
                comHeight={279}
                compLeft={48}
                compRight={56}
                compType="Column"
              >
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:784"
                  comWidth={160}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  Limited Deals
                </Text>
                <Column
                  className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="280"
                  comWidth={385}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-between px-[0] w-[100%]"
                    compId="9:786"
                    comWidth={385}
                    comHeight={107}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="9:789"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:790"
                        comWidth={31}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >
                        08
                      </Text>
                      <Text
                        className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                        compId="9:791"
                        comWidth={52}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >
                        Hours
                      </Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="9:794"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:795"
                        comWidth={31}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >
                        58
                      </Text>
                      <Text
                        className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                        compId="9:796"
                        comWidth={71}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >
                        Minutes
                      </Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="9:798"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:799"
                        comWidth={24}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >
                        18
                      </Text>
                      <Text
                        className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] 2xl:mr-[10px] 3xl:mr-[12px] mr-[14px] xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                        compId="9:800"
                        comWidth={78}
                        comHeight={27}
                        compLeft={15}
                        compRight={14}
                        compType="Text"
                      >
                        Seconds
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:785"
                  comWidth={231}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  Casual Grey Shoes
                </Text>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="281"
                  comWidth={385}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center w-[100%]"
                    compId="214"
                    comWidth={385}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal line-through not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                      compId="9:782"
                      comWidth={60}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      $399
                    </Text>
                    <Text
                      className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] lg:mr-[144px] xl:mr-[164px] 2xl:mr-[185px] 3xl:mr-[222px] mr-[247px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:783"
                      comWidth={55}
                      comHeight={36}
                      compLeft={23}
                      compRight={247}
                      compType="Text"
                    >
                      $199
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </List>
        </Stack>
        <Row
          className="lg:gap-[17px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] gap-[30px] grid grid-cols-2 items-center mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] px-[0] w-[85%]"
          compId="9:808"
          comWidth={1634}
          comHeight={581}
          compLeft={10}
          compRight={10}
          compType="Row"
        >
          <Column
            className="w-[100%]"
            compId="9:809"
            comWidth={802}
            comHeight={581}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]"
              compId="9:810"
              comWidth={214}
              comHeight={54}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              New Arrival
            </Text>
            <Column
              className="items-center lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78.5px] w-[100%]"
              compId="282"
              comWidth={802}
              comHeight={448.5}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <List
                className="gap-[0] min-h-[auto] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[97%]"
                compId="222"
                comWidth={778}
                comHeight={339}
                compLeft={10}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center lg:my-[36px] xl:my-[41px] 2xl:my-[46px] 3xl:my-[56px] my-[62.5px] w-[100%]"
                  compId="220"
                  comWidth={778}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_placeholder_27.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    compId="9:815"
                    comWidth={107}
                    comHeight={107}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] w-[28%]"
                    compId="9:817"
                    comWidth={220}
                    comHeight={80}
                    compLeft={16}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:818"
                      comWidth={220}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Checkered Jacket
                    </Text>
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                      compId="9:819"
                      comWidth={60}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                  <Img
                    src="images/img_placeholder_28.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[43px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] ml-[75px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    compId="9:823"
                    comWidth={107}
                    comHeight={107}
                    compLeft={75}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] w-[30%]"
                    compId="9:825"
                    comWidth={237}
                    comHeight={80}
                    compLeft={16}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:826"
                      comWidth={237}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Blue Woman Denim
                    </Text>
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                      compId="9:827"
                      comWidth={60}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                </Row>
                <Row
                  className="items-center lg:mr-[37px] xl:mr-[42px] 2xl:mr-[48px] 3xl:mr-[57px] mr-[64px] lg:my-[36px] xl:my-[41px] 2xl:my-[46px] 3xl:my-[56px] my-[62.5px] w-[92%]"
                  compId="221"
                  comWidth={714}
                  comHeight={107}
                  compLeft={0}
                  compRight={64}
                  compType="Row"
                >
                  <Img
                    src="images/img_placeholder_29.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    compId="9:831"
                    comWidth={107}
                    comHeight={107}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] w-[24%]"
                    compId="9:833"
                    comWidth={171}
                    comHeight={80}
                    compLeft={16}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:834"
                      comWidth={171}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Orange Jeans
                    </Text>
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                      compId="9:835"
                      comWidth={60}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                  <Img
                    src="images/img_placeholder_30.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 3xl:ml-[111px] ml-[124px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    compId="9:839"
                    comWidth={107}
                    comHeight={107}
                    compLeft={124}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] w-[24%]"
                    compId="9:841"
                    comWidth={173}
                    comHeight={80}
                    compLeft={16}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:842"
                      comWidth={173}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Classic Watch
                    </Text>
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                      compId="9:843"
                      comWidth={60}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      $299
                    </Text>
                  </Column>
                </Row>
              </List>
              <Row
                className="items-center justify-center lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78.5px] w-[14%]"
                compId="9:844"
                comWidth={110}
                comHeight={31}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-medium my-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                  compId="9:845"
                  comWidth={70}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  View all
                </Text>
                <Img
                  src="images/img_arrow_1.svg"
                  className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] object-contain w-[29%]"
                  compId="9:846"
                  comWidth={32}
                  comHeight={31}
                  compLeft={8}
                  compRight={0}
                  compType="Image"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
          <Column
            className="w-[100%]"
            compId="9:849"
            comWidth={802}
            comHeight={581}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]"
              compId="9:850"
              comWidth={341}
              comHeight={54}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              Popular This Week
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76px] lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] w-[85%]"
              compId="225"
              comWidth={685}
              comHeight={344}
              compLeft={24}
              compRight={24}
              compType="List"
              orientation="vertical"
            >
              <Row
                className="items-center xl:mr-[4px] lg:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] mr-[7px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] my-[60px] w-[99%]"
                compId="223"
                comWidth={678}
                comHeight={112}
                compLeft={0}
                compRight={7}
                compType="Row"
              >
                <Img
                  src="images/img_placeholder_31.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] my-[2.5px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  compId="9:855"
                  comWidth={107}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[19%]"
                  compId="9:856"
                  comWidth={132}
                  comHeight={112}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center w-[100%]"
                    compId="284"
                    comWidth={132}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="9:857"
                      comWidth={132}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:858"
                        comWidth={132}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Blue Jeans
                      </Text>
                      <Text
                        className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                        compId="9:859"
                        comWidth={60}
                        comHeight={36}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    compId="272"
                    comWidth={112}
                    comHeight={16}
                    compLeft={0}
                    compRight={10}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                </Column>
                <Img
                  src="images/img_placeholder_32.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] ml-[163px] lg:ml-[95px] my-[2.5px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  compId="9:869"
                  comWidth={107}
                  comHeight={107}
                  compLeft={163}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[20%]"
                  compId="9:870"
                  comWidth={137}
                  comHeight={112}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center w-[100%]"
                    compId="285"
                    comWidth={137}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="9:871"
                      comWidth={137}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:872"
                        comWidth={137}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Wristwatch
                      </Text>
                      <Text
                        className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                        compId="9:873"
                        comWidth={60}
                        comHeight={36}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    compId="273"
                    comWidth={112}
                    comHeight={16}
                    compLeft={0}
                    compRight={10}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                </Column>
              </Row>
              <Row
                className="items-center lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] my-[60px] w-[100%]"
                compId="224"
                comWidth={685}
                comHeight={112}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_placeholder_33.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] my-[2.5px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  compId="9:883"
                  comWidth={107}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[26%]"
                  compId="9:884"
                  comWidth={179}
                  comHeight={112}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center w-[100%]"
                    compId="286"
                    comWidth={179}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="9:885"
                      comWidth={179}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:886"
                        comWidth={179}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Elegant Jacket
                      </Text>
                      <Text
                        className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                        compId="9:887"
                        comWidth={60}
                        comHeight={36}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    compId="274"
                    comWidth={112}
                    comHeight={16}
                    compLeft={0}
                    compRight={10}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                </Column>
                <Img
                  src="images/img_placeholder_34.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 3xl:ml-[104px] ml-[116px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] my-[2.5px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  compId="9:897"
                  comWidth={107}
                  comHeight={107}
                  compLeft={116}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[21%]"
                  compId="9:898"
                  comWidth={144}
                  comHeight={112}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center w-[100%]"
                    compId="287"
                    comWidth={144}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="9:899"
                      comWidth={144}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:900"
                        comWidth={144}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Gray Watch
                      </Text>
                      <Text
                        className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                        compId="9:901"
                        comWidth={60}
                        comHeight={36}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    compId="275"
                    comWidth={112}
                    comHeight={16}
                    compLeft={0}
                    compRight={10}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                </Column>
              </Row>
            </List>
            <Column
              className="items-center lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76px] w-[100%]"
              compId="283"
              comWidth={802}
              comHeight={31}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-center w-[14%]"
                compId="9:908"
                comWidth={110}
                comHeight={31}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-medium my-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                  compId="9:909"
                  comWidth={70}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  View all
                </Text>
                <Img
                  src="images/img_arrow_1.svg"
                  className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] object-contain w-[29%]"
                  compId="9:910"
                  comWidth={32}
                  comHeight={31}
                  compLeft={8}
                  compRight={0}
                  compType="Image"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
        </Row>
        <Row
          className="bg-gray_50 items-center mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="228"
          comWidth={1920}
          comHeight={217}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Img
            src="images/img_truck.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            compId="9:517"
            comWidth={48}
            comHeight={48}
            compLeft={144}
            compRight={0}
            compType="Image"
            alt="Truck"
          />
          <Column
            className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]"
            compId="9:521"
            comWidth={211}
            comHeight={89}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
              compId="9:522"
              comWidth={120}
              comHeight={27}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              Free Delivery
            </Text>
            <Text
              className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]"
              compId="9:523"
              comWidth={211}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Img
            src="images/img_card.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            compId="9:525"
            comWidth={48}
            comHeight={48}
            compLeft={125}
            compRight={0}
            compType="Image"
            alt="Card"
          />
          <Column
            className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]"
            compId="9:528"
            comWidth={211}
            comHeight={89}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
              compId="9:529"
              comWidth={159}
              comHeight={27}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              Payment Method
            </Text>
            <Text
              className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]"
              compId="9:530"
              comWidth={211}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Img
            src="images/img_broken.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            compId="9:532"
            comWidth={48}
            comHeight={48}
            compLeft={125}
            compRight={0}
            compType="Image"
            alt="Broken"
          />
          <Column
            className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]"
            compId="9:536"
            comWidth={211}
            comHeight={89}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
              compId="9:537"
              comWidth={90}
              comHeight={27}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              Warranty
            </Text>
            <Text
              className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]"
              compId="9:538"
              comWidth={211}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Img
            src="images/img_support.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            compId="9:540"
            comWidth={48}
            comHeight={48}
            compLeft={125}
            compRight={0}
            compType="Image"
            alt="Support"
          />
          <Column
            className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[138px] xl:mr-[158px] 2xl:mr-[177px] 3xl:mr-[213px] mr-[237px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]"
            compId="9:544"
            comWidth={211}
            comHeight={89}
            compLeft={32}
            compRight={237}
            compType="Column"
          >
            <Text
              className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
              compId="9:545"
              comWidth={171}
              comHeight={27}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              Customer Support
            </Text>
            <Text
              className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]"
              compId="9:546"
              comWidth={211}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
        </Row>
        <footer
          className="w-[100%]"
          compId="9:561"
          comWidth={1920}
          comHeight={493}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-gray_800 items-center justify-end w-[100%]"
            compId="233"
            comWidth={1920}
            comHeight={493}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[100%]"
              compId="232"
              comWidth={1920}
              comHeight={280}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[22%]"
                compId="9:580"
                comWidth={416}
                comHeight={244}
                compLeft={144}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[27%]"
                  compId="9:581"
                  comWidth={112}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Img
                    src="images/img_group19_1.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                    compId="9:583"
                    comWidth={39}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group19"
                  />
                  <Text
                    className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                    compId="9:582"
                    comWidth={65}
                    comHeight={36}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >
                    Elliye
                  </Text>
                </Row>
                <Text
                  className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[92%]"
                  compId="9:587"
                  comWidth={384}
                  comHeight={64}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor .
                </Text>
                <Column
                  className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="288"
                  comWidth={416}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center w-[100%]"
                    compId="9:588"
                    comWidth={416}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center w-[100%]"
                      compId="9:589"
                      comWidth={416}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_call.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="9:590"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                        compId="9:592"
                        comWidth={384}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >
                        +1234567890
                      </Text>
                    </Row>
                    <Row
                      className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="9:593"
                      comWidth={416}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_email.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="9:594"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                        compId="9:596"
                        comWidth={384}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >
                        elliye@support.com
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Row
                className="justify-center 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] w-[49%]"
                compId="276"
                comWidth={938}
                comHeight={280}
                compLeft={0}
                compRight={144}
                compType="Row"
              >
                <Column
                  className="lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] mb-[56px] w-[26%]"
                  compId="9:573"
                  comWidth={245}
                  comHeight={224}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                    compId="9:574"
                    comWidth={166}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    Product Links
                  </Text>
                  <Column
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[41%]"
                    compId="9:575"
                    comWidth={101}
                    comHeight={156}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:576"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >
                      Categories
                    </Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:577"
                      comWidth={101}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      New Arrival
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:578"
                      comWidth={78}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      Features
                    </Text>
                    <Text
                      className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:579"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >
                      Collections
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[26%]"
                  compId="9:564"
                  comWidth={245}
                  comHeight={280}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                    compId="9:565"
                    comWidth={123}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    Company
                  </Text>
                  <Column
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[60%]"
                    compId="9:566"
                    comWidth={147}
                    comHeight={212}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:567"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      About
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:568"
                      comWidth={40}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      Blog
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:569"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      Careers
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:570"
                      comWidth={75}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      Services
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:571"
                      comWidth={122}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      Privacy Policy
                    </Text>
                    <Text
                      className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                      compId="9:572"
                      comWidth={147}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Terms of service
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] mb-[71px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[41%]"
                  compId="9:597"
                  comWidth={384}
                  comHeight={209}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                    compId="9:605"
                    comWidth={238}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    Join our Newsletter
                  </Text>
                  <Text
                    className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]"
                    compId="9:606"
                    comWidth={384}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Drop your email below to get update, promotions, coupons,
                    and more!
                  </Text>
                  <Column
                    className="items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]"
                    compId="289"
                    comWidth={384}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="bg-gray_800 border border-solid border-white_A700 items-center justify-between w-[100%]"
                      compId="229"
                      comWidth={384}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic opacity-op5 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 tracking-ls1 w-[auto]"
                        compId="9:600"
                        comWidth={151}
                        comHeight={27}
                        compLeft={24}
                        compRight={0}
                        compType="Text"
                      >
                        Enter your email
                      </Text>
                      <Img
                        src="images/img_submit.svg"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        compId="9:601"
                        comWidth={60}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="submit"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Row>
            <Text
              className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] mt-[96px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-bluegray_100 w-[auto]"
              compId="9:563"
              comWidth={281}
              comHeight={21}
              compLeft={10}
              compRight={10}
              compType="Text"
            >
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageV2Page;
