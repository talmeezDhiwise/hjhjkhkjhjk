import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { postUsers } from "service/api";
import { useGoogleLogin } from "@react-oauth/google";
import {
  Column,
  Stack,
  Img,
  Row,
  Text,
  Button,
  Slider,
  PagerIndicator,
  Grid,
  List,
  RatingBar,
  Input,
} from "components";

const HomepageV1Page = () => {
  const [apiData, setapiData] = React.useState();
  const navigate = useNavigate();
  const location = useLocation();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function callApi() {
    const req = {
      data: { address: JSON.parse(localStorage.getItem("items")) },
    };
    postUsers(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate1() {
    navigate("/frame1");
  }
  function handleNavigate2() {
    navigate("/frame1", { state: { local: location?.state?.a1 } });
  }
  function handleBackNavigation1() {
    navigate(-1);
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]"
        compId="9:39"
        comWidth={1920}
        comHeight={6617}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="39"
          comWidth={1920}
          comHeight={95}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Stack
            className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] h-[95px] w-[100%]"
            compId="156"
            comWidth={1920}
            comHeight={95}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Img
              src="images/img_background.svg"
              className="absolute lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] h-[95px] inset-[0] object-cover w-[100%]"
              compId="9:490"
              comWidth={1920}
              comHeight={95}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="background"
            />
            <Row
              className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]"
              compId="9:491"
              comWidth={1632}
              comHeight={60}
              compLeft={144}
              compRight={144}
              compType="Row"
            >
              <Row
                className="common-pointer items-center 3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]"
                compId="9:508"
                comWidth={112}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="Row"
                onClick={handleNavigate2}
              >
                <Img
                  src="images/img_group19.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                  compId="9:510"
                  comWidth={39}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group19"
                />
                <Text
                  className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:509"
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
                className="items-center justify-center xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[228px] xl:ml-[261px] 2xl:ml-[294px] 3xl:ml-[353px] ml-[392px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] w-[38%]"
                compId="9:503"
                comWidth={624}
                comHeight={27}
                compLeft={392}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="cursor-pointer hover:font-medium font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                  compId="9:504"
                  comWidth={100}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Categories
                </Text>
                <Text
                  className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                  compId="9:505"
                  comWidth={103}
                  comHeight={27}
                  compLeft={80}
                  compRight={0}
                  compType="Text"
                >
                  New Arrival
                </Text>
                <Text
                  className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                  compId="9:506"
                  comWidth={79}
                  comHeight={27}
                  compLeft={80}
                  compRight={0}
                  compType="Text"
                >
                  Features
                </Text>
                <Text
                  className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                  compId="9:507"
                  comWidth={102}
                  comHeight={27}
                  compLeft={80}
                  compRight={0}
                  compType="Text"
                >
                  Collections
                </Text>
              </Row>
              <Row
                className="items-center justify-between lg:ml-[151px] xl:ml-[172px] 2xl:ml-[194px] 3xl:ml-[233px] ml-[259px] w-[15%]"
                compId="9:492"
                comWidth={245}
                comHeight={60}
                compLeft={259}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain w-[33%]"
                  compId="9:495"
                  comWidth={80}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="icon"
                />
                <Button
                  className="bg-gray_800 font-bold lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.05px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[44%]"
                  compId="37"
                  comWidth={107}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                >
                  Login
                </Button>
              </Row>
            </Row>
          </Stack>
        </header>
        <Stack
          className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] w-[100%]"
          compId="158"
          comWidth={1920}
          comHeight={700}
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
                <Row
                  className="bg-gray_50 items-center justify-end"
                  compId="137"
                  comWidth={1920}
                  comHeight={700}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Stack
                    className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[49%]"
                    compId="160"
                    comWidth={939}
                    comHeight={700}
                    compLeft={144}
                    compRight={0}
                    compType="Stack"
                  >
                    <Img
                      src="images/img_placeholder.png"
                      className="absolute bottom-[0] lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain right-[0] w-[41%]"
                      compId="9:132"
                      comWidth={385}
                      comHeight={336}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="placeholder"
                    />
                    <Img
                      src="images/img_placeholder_1.png"
                      className="absolute lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-contain right-[0] top-[0] w-[41%]"
                      compId="9:134"
                      comWidth={384}
                      comHeight={364}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="placeholder"
                    />
                    <Column
                      className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] w-[70%]"
                      compId="9:155"
                      comWidth={661}
                      comHeight={476}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal font-playfairdisplay not-italic lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px] text-[96px] text-gray_800 w-[auto]"
                        compId="9:156"
                        comWidth={661}
                        comHeight={128}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Summer Sale
                      </Text>
                      <Text
                        className="font-bold font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_800 w-[auto]"
                        compId="9:157"
                        comWidth={250}
                        comHeight={96}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >
                        50% Off
                      </Text>
                      <Text
                        className="font-normal font-poppins lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[79%]"
                        compId="9:158"
                        comWidth={523}
                        comHeight={96}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                      <Row
                        className="common-pointer bg-gray_800 font-poppins items-center mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[37%]"
                        compId="132"
                        comWidth={245}
                        comHeight={60}
                        compLeft={0}
                        compRight={10}
                        compType="Row"
                        onClick={handleNavigate1}
                      >
                        <Text
                          className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                          compId="9:160"
                          comWidth={121}
                          comHeight={36}
                          compLeft={33}
                          compRight={0}
                          compType="Text"
                        >
                          Shop Now
                        </Text>
                        <Img
                          src="images/img_arrow.svg"
                          className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                          compId="9:161"
                          comWidth={48}
                          comHeight={48}
                          compLeft={10}
                          compRight={33}
                          compType="Image"
                          alt="Arrow"
                        />
                      </Row>
                    </Column>
                  </Stack>
                  <Column
                    className="items-center w-[44%]"
                    compId="136"
                    comWidth={837}
                    comHeight={700}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Img
                      src="images/img_placeholder_2.png"
                      className="lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-cover w-[100%]"
                      compId="9:133"
                      comWidth={837}
                      comHeight={364}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="placeholder"
                    />
                    <Row
                      className="items-center justify-evenly w-[100%]"
                      compId="135"
                      comWidth={837}
                      comHeight={336}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_placeholder_3.png"
                        className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain w-[46%]"
                        compId="9:136"
                        comWidth={384}
                        comHeight={336}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="placeholder"
                      />
                      <Stack
                        className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] w-[54%]"
                        compId="162"
                        comWidth={453}
                        comHeight={336}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Img
                          src="images/img_placeholder_4.png"
                          className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover w-[100%]"
                          compId="9:135"
                          comWidth={453}
                          comHeight={336}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="placeholder"
                        />
                        <Img
                          src="images/img_button.svg"
                          className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-x-[0] mx-[auto] object-contain w-[35%]"
                          compId="9:137"
                          comWidth={160}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="button"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Row>
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
            className="absolute bottom-[5%] h-[12px] inset-x-[0] mx-[auto] w-[auto]"
            compId="38"
            comWidth={112}
            comHeight={12}
            compLeft={0}
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
        <Column
          className="items-center mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]"
          compId="9:83"
          comWidth={1633}
          comHeight={299}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compId="9:121"
            comWidth={1633}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="common-pointer font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]"
              compId="9:122"
              comWidth={205}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
              onClick={() => {
                callApi();
              }}
            >
              Categories
            </Text>
            <Row
              className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]"
              compId="9:123"
              comWidth={110}
              comHeight={31}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium my-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                compId="9:124"
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
                compId="9:125"
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
            className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            compId="9:84"
            comWidth={1633}
            comHeight={213}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="bg-gray_50 items-center w-[15%]"
              compId="9:87"
              comWidth={245}
              comHeight={213}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Img
                src="images/img_sweater.svg"
                className="common-pointer lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="9:88"
                comWidth={96}
                comHeight={96}
                compLeft={10}
                compRight={10}
                compType="Image"
                onClick={handleBackNavigation1}
                alt="Sweater"
              />
              <Text
                className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                compId="9:90"
                comWidth={60}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Text"
              >
                Jacket
              </Text>
            </Column>
            <Column
              className="bg-gray_50 items-center w-[15%]"
              compId="9:105"
              comWidth={246}
              comHeight={213}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Img
                src="images/img_tshirt.svg"
                className="common-pointer lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="9:107"
                comWidth={96}
                comHeight={96}
                compLeft={10}
                compRight={10}
                compType="Image"
                onClick={googleSignIn}
                alt="Tshirt"
              />
              <Text
                className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                compId="9:106"
                comWidth={40}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Text"
              >
                Shirt
              </Text>
            </Column>
            <Column
              className="bg-gray_50 items-center w-[15%]"
              compId="9:93"
              comWidth={245}
              comHeight={213}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Img
                src="images/img_pants.svg"
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="9:94"
                comWidth={96}
                comHeight={96}
                compLeft={10}
                compRight={10}
                compType="Image"
                alt="Pants"
              />
              <Text
                className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                compId="9:96"
                comWidth={51}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Text"
              >
                Pants
              </Text>
            </Column>
            <Column
              className="bg-gray_800 items-center w-[15%]"
              compId="9:99"
              comWidth={246}
              comHeight={213}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Img
                src="images/img_boot.svg"
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="9:100"
                comWidth={96}
                comHeight={96}
                compLeft={10}
                compRight={10}
                compType="Image"
                alt="Boot"
              />
              <Text
                className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                compId="9:102"
                comWidth={55}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Text"
              >
                Shoes
              </Text>
            </Column>
            <Column
              className="bg-gray_50 items-center w-[15%]"
              compId="9:111"
              comWidth={245}
              comHeight={213}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Img
                src="images/img_dress.svg"
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="9:112"
                comWidth={96}
                comHeight={96}
                compLeft={10}
                compRight={10}
                compType="Image"
                alt="Dress"
              />
              <Text
                className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                compId="9:114"
                comWidth={50}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Text"
              >
                Dress
              </Text>
            </Column>
            <Column
              className="bg-gray_50 items-center w-[15%]"
              compId="9:117"
              comWidth={246}
              comHeight={213}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Img
                src="images/img_belt.svg"
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="9:118"
                comWidth={96}
                comHeight={96}
                compLeft={10}
                compRight={10}
                compType="Image"
                alt="Belt"
              />
              <Text
                className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                compId="9:120"
                comWidth={98}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Text"
              >
                Accesories
              </Text>
            </Column>
          </Row>
        </Column>
        <Column
          className="items-center mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="143"
          comWidth={1920}
          comHeight={774}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[85%]"
            compId="9:263"
            comWidth={1633}
            comHeight={54}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]"
              compId="9:264"
              comWidth={234}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              New Arrivals
            </Text>
            <Row
              className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]"
              compId="9:265"
              comWidth={110}
              comHeight={31}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium my-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                compId="9:266"
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
                compId="9:267"
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
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] 2xl:px-[108px] 3xl:px-[129px] px-[144px] lg:px-[84px] xl:px-[96px] w-[100%]"
            compId="142"
            comWidth={1920}
            comHeight={688}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Row
              className="bg-gray_50 items-center justify-center w-[100%]"
              compId="141"
              comWidth={800}
              comHeight={688}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Img
                src="images/img_placeholder_5.png"
                className="lg:h-[369px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[569px] h-[631px] lg:ml-[35px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] ml-[61.5px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] my-[28.5px] object-contain w-[48%]"
                compId="9:292"
                comWidth={384}
                comHeight={631}
                compLeft={61.5}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:mr-[35px] xl:mr-[41px] 2xl:mr-[46px] 3xl:mr-[55px] mr-[61.5px] lg:my-[155px] xl:my-[177px] 2xl:my-[200px] 3xl:my-[239px] my-[266.5px] w-[31%]"
                compId="9:293"
                comWidth={245}
                comHeight={155}
                compLeft={48}
                compRight={61.5}
                compType="Column"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="9:294"
                  comWidth={245}
                  comHeight={71}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:295"
                    comWidth={245}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Purple Warm Jacket
                  </Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                    compId="9:296"
                    comWidth={45}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >
                    $299
                  </Text>
                </Column>
                <Button
                  className="bg-gray_800 font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.05px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[82%]"
                  compId="36"
                  comWidth={200}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >
                  Add to Cart
                </Button>
              </Column>
            </Row>
            <Grid
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 w-[100%]"
              compId="173"
              comWidth={800}
              comHeight={688}
              compLeft={0}
              compRight={0}
              compType="Grid"
            >
              <Column
                className="bg-gray_50 items-center justify-center w-[100%]"
                compId="9:273"
                comWidth={384}
                comHeight={328}
                compLeft={0}
                compRight={416}
                compType="Column"
              >
                <Img
                  src="images/img_placeholder_6.png"
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  compId="9:272"
                  comWidth={177}
                  comHeight={177}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[29px] xl:mx-[33px] 2xl:mx-[37px] 3xl:mx-[45px] mx-[50.5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:274"
                  comWidth={283}
                  comHeight={36}
                  compLeft={50.5}
                  compRight={50.5}
                  compType="Text"
                >
                  Blue Grey Warm Jacket
                </Text>
                <Text
                  className="font-medium lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                  compId="9:275"
                  comWidth={45}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  $299
                </Text>
              </Column>
              <Column
                className="bg-gray_50 items-center justify-center w-[100%]"
                compId="9:278"
                comWidth={384}
                comHeight={328}
                compLeft={416}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_placeholder_7.png"
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  compId="9:277"
                  comWidth={177}
                  comHeight={177}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:279"
                  comWidth={167}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  Denim Jacket
                </Text>
                <Text
                  className="font-medium lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                  compId="9:280"
                  comWidth={45}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  $299
                </Text>
              </Column>
              <Column
                className="bg-gray_50 items-center justify-center w-[100%]"
                compId="9:288"
                comWidth={384}
                comHeight={328}
                compLeft={0}
                compRight={416}
                compType="Column"
              >
                <Img
                  src="images/img_placeholder_8.png"
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  compId="9:287"
                  comWidth={177}
                  comHeight={177}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:289"
                  comWidth={153}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  Black Jacket
                </Text>
                <Text
                  className="font-medium lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                  compId="9:290"
                  comWidth={45}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  $299
                </Text>
              </Column>
              <Column
                className="bg-gray_50 items-center justify-center w-[100%]"
                compId="9:283"
                comWidth={384}
                comHeight={328}
                compLeft={416}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_placeholder_9.png"
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  compId="9:282"
                  comWidth={177}
                  comHeight={177}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:284"
                  comWidth={229}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  Green Polar Jacket
                </Text>
                <Text
                  className="font-medium lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                  compId="9:285"
                  comWidth={45}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  $299
                </Text>
              </Column>
            </Grid>
          </Row>
        </Column>
        <Column
          className="items-center mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]"
          compId="9:164"
          comWidth={1632}
          comHeight={1650}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compId="9:165"
            comWidth={1632}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]"
              compId="9:166"
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
              compId="9:167"
              comWidth={110}
              comHeight={31}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium my-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                compId="9:168"
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
                compId="9:169"
                comWidth={32}
                comHeight={31}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Arrow"
              />
            </Row>
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            compId="175"
            comWidth={1632}
            comHeight={1564}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="vertical"
          >
            <Row
              className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
              compId="9:172"
              comWidth={1632}
              comHeight={500}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="border-2 border-gray_800 border-solid items-center w-[24%]"
                compId="9:175"
                comWidth={384}
                comHeight={500}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_placeholder_10.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] mt-[43.5px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:174"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                  compId="9:176"
                  comWidth={184}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  Black Briefcase
                </Text>
                <Text
                  className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                  compId="9:177"
                  comWidth={45}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  $299
                </Text>
                <Button
                  className="bg-gray_800 font-bold lg:mb-[25px] xl:mb-[29px] 2xl:mb-[32px] 3xl:mb-[39px] mb-[43.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.05px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[52%]"
                  compId="25"
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
                className="items-center w-[24%]"
                compId="9:180"
                comWidth={384}
                comHeight={500}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_placeholder_11.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[81.5px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:181"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[81.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[29%]"
                  compId="9:182"
                  comWidth={111}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:183"
                    comWidth={111}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Pink Shirt
                  </Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                    compId="9:184"
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
                className="items-center mb-[1px] w-[24%]"
                compId="9:185"
                comWidth={384}
                comHeight={499}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_placeholder_12.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:186"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[38%]"
                  compId="9:187"
                  comWidth={145}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:188"
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
                    compId="9:189"
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
                className="items-center mt-[1px] w-[24%]"
                compId="9:190"
                comWidth={384}
                comHeight={499}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_placeholder_13.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:191"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[36%]"
                  compId="9:192"
                  comWidth={140}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:193"
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
                    compId="9:194"
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
              className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
              compId="9:195"
              comWidth={1632}
              comHeight={500}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-center w-[24%]"
                compId="9:196"
                comWidth={384}
                comHeight={500}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_stylishblacks.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[81.5px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:197"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="stylishblacks"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[81.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                  compId="9:198"
                  comWidth={192}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:199"
                    comWidth={192}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Black Highheels
                  </Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                    compId="9:200"
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
                className="items-center w-[24%]"
                compId="9:201"
                comWidth={384}
                comHeight={500}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_casualfabrics.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[81.5px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:202"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="casualfabrics"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[81.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[59%]"
                  compId="9:203"
                  comWidth={228}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:204"
                    comWidth={228}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Casual Grey Shoes
                  </Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                    compId="9:205"
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
                className="items-center w-[24%]"
                compId="9:206"
                comWidth={384}
                comHeight={500}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_shoesisolated.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[81.5px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:207"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="shoesisolated"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[81.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[40%]"
                  compId="9:208"
                  comWidth={155}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:209"
                    comWidth={155}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Brown Shoes
                  </Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                    compId="9:210"
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
                className="items-center mt-[1px] w-[24%]"
                compId="9:211"
                comWidth={384}
                comHeight={499}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_businessshirt.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:212"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="businessshirt"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[43%]"
                  compId="9:213"
                  comWidth={167}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:214"
                    comWidth={167}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Business Shirt
                  </Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                    compId="9:215"
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
              className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
              compId="9:216"
              comWidth={1632}
              comHeight={500}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-center w-[24%]"
                compId="9:217"
                comWidth={384}
                comHeight={500}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_warmpantspxl7.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[81.5px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:218"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="warmpantsPXL7"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[81.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[55%]"
                  compId="9:219"
                  comWidth={212}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:220"
                    comWidth={212}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Grey Warm Pants
                  </Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                    compId="9:221"
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
                className="items-center w-[24%]"
                compId="9:222"
                comWidth={384}
                comHeight={500}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_sportj9bzxuy.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[81.5px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:223"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="sportJ9BZXUY"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[81.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[60%]"
                  compId="9:224"
                  comWidth={231}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:225"
                    comWidth={231}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Green Sport Jacket
                  </Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                    compId="9:226"
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
                className="items-center mb-[1px] w-[24%]"
                compId="9:227"
                comWidth={384}
                comHeight={499}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_travel8v7cnke.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:228"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="travel8V7CNKE"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                  compId="9:229"
                  comWidth={245}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:230"
                    comWidth={245}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Purple Warm Jacket
                  </Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                    compId="9:231"
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
                className="items-center mt-[1px] w-[24%]"
                compId="9:232"
                comWidth={384}
                comHeight={499}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_womensdenimsk.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  compId="9:233"
                  comWidth={250}
                  comHeight={250}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="womensdenimsk"
                />
                <Column
                  className="items-center lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[63%]"
                  compId="9:234"
                  comWidth={240}
                  comHeight={71}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:235"
                    comWidth={240}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Woman Denim Skirt
                  </Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]"
                    compId="9:236"
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
        </Column>
        <Stack
          className="lg:h-[318px] xl:h-[363px] 2xl:h-[409px] 3xl:h-[490px] h-[544px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] mt-[74px] w-[100%]"
          compId="164"
          comWidth={1920}
          comHeight={544}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute bg-gray_800 items-center top-[0] w-[100%]"
            compId="27"
            comWidth={1920}
            comHeight={426}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:mb-[190px] xl:mb-[218px] 2xl:mb-[245px] 3xl:mb-[294px] mb-[327px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 w-[auto]"
              compId="9:239"
              comWidth={376}
              comHeight={54}
              compLeft={144}
              compRight={144}
              compType="Text"
            >
              Summer Collections
            </Text>
          </Column>
          <Stack
            className="absolute bottom-[0] lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-x-[0] mx-[auto] w-[87%]"
            compId="166"
            comWidth={1663}
            comHeight={400}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Row
              className="absolute lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 inset-y-[0] items-center justify-between left-[0] px-[0] right-[2%] w-[98%]"
              compId="9:241"
              comWidth={1633}
              comHeight={400}
              compLeft={0}
              compRight={30}
              compType="Row"
            >
              <Stack
                className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
                compId="168"
                comWidth={523}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Img
                  src="images/img_image2.png"
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  compId="9:245"
                  comWidth={523}
                  comHeight={400}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image2"
                />
                <Text
                  className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[11%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[36%]"
                  compId="9:246"
                  comWidth={188}
                  comHeight={108}
                  compLeft={59}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-gray_800 font-poppins">
                    Summer <br />
                  </span>
                  <span className="text-gray_800 font-poppins font-bold">
                    Collection
                  </span>
                </Text>
              </Stack>
              <Stack
                className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
                compId="170"
                comWidth={523}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Img
                  src="images/img_image3.png"
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  compId="9:250"
                  comWidth={523}
                  comHeight={400}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image3"
                />
                <Text
                  className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 w-[36%]"
                  compId="9:251"
                  comWidth={188}
                  comHeight={108}
                  compLeft={53}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-white_A700 font-poppins">
                    Casual <br />
                  </span>
                  <span className="text-white_A700 font-poppins font-bold">
                    Collection
                  </span>
                </Text>
              </Stack>
              <Stack
                className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
                compId="172"
                comWidth={523}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Img
                  src="images/img_image4.png"
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  compId="9:255"
                  comWidth={523}
                  comHeight={400}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image4"
                />
                <Text
                  className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 w-[36%]"
                  compId="9:256"
                  comWidth={188}
                  comHeight={108}
                  compLeft={52}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-white_A700 font-poppins">
                    Big Vibe <br />
                  </span>
                  <span className="text-white_A700 font-poppins font-bold">
                    Collection
                  </span>
                </Text>
              </Stack>
            </Row>
            <Img
              src="images/img_next.svg"
              className="absolute lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] inset-y-[0] my-[auto] object-contain right-[0] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
              compId="9:257"
              comWidth={60}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="next"
            />
          </Stack>
        </Stack>
        <Column
          className="items-center mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]"
          compId="9:299"
          comWidth={1632}
          comHeight={810}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compId="9:300"
            comWidth={1632}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]"
              compId="9:301"
              comWidth={341}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Popular This Week
            </Text>
            <Row
              className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]"
              compId="9:302"
              comWidth={110}
              comHeight={31}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium my-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                compId="9:303"
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
                compId="9:304"
                comWidth={32}
                comHeight={31}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Arrow"
              />
            </Row>
          </Row>
          <Grid
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            compId="174"
            comWidth={1632}
            comHeight={724}
            compLeft={0}
            compRight={0}
            compType="Grid"
          >
            <Row
              className="items-center w-[100%]"
              compId="9:308"
              comWidth={523}
              comHeight={220}
              compLeft={0}
              compRight={1109}
              compType="Row"
            >
              <Img
                src="images/img_placeholder_14.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                compId="9:311"
                comWidth={225}
                comHeight={175}
                compLeft={24}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[22px] xl:mr-[25px] 2xl:mr-[28px] 3xl:mr-[34px] mr-[38px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[42%]"
                compId="9:312"
                comWidth={220}
                comHeight={120}
                compLeft={16}
                compRight={38}
                compType="Column"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="185"
                  comWidth={220}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="9:313"
                    comWidth={220}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:314"
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
                      compId="9:315"
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
                  compId="176"
                  comWidth={152}
                  comHeight={24}
                  compLeft={0}
                  compRight={10}
                  compType="RatingBar"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1440}
                ></RatingBar>
              </Column>
            </Row>
            <Row
              className="items-center justify-center w-[100%]"
              compId="9:322"
              comWidth={522}
              comHeight={220}
              compLeft={555}
              compRight={555}
              compType="Row"
            >
              <Img
                src="images/img_placeholder_15.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                compId="9:325"
                comWidth={225}
                comHeight={175}
                compLeft={24}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[45px] xl:mr-[52px] 2xl:mr-[58px] 3xl:mr-[70px] mr-[78px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[34%]"
                compId="9:326"
                comWidth={179}
                comHeight={120}
                compLeft={16}
                compRight={78}
                compType="Column"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="186"
                  comWidth={179}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="9:327"
                    comWidth={179}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:328"
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
                      compId="9:329"
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
                  compId="177"
                  comWidth={152}
                  comHeight={24}
                  compLeft={0}
                  compRight={10}
                  compType="RatingBar"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1440}
                ></RatingBar>
              </Column>
            </Row>
            <Row
              className="items-center justify-center w-[100%]"
              compId="9:336"
              comWidth={523}
              comHeight={220}
              compLeft={1109}
              compRight={0}
              compType="Row"
            >
              <Img
                src="images/img_placeholder_16.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                compId="9:339"
                comWidth={225}
                comHeight={175}
                compLeft={24}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[13px] 3xl:mr-[16px] mr-[18px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[46%]"
                compId="9:340"
                comWidth={240}
                comHeight={120}
                compLeft={16}
                compRight={18}
                compType="Column"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="187"
                  comWidth={240}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="9:341"
                    comWidth={240}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:342"
                      comWidth={240}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Blue Woman Denim
                    </Text>
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                      compId="9:343"
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
                  compId="178"
                  comWidth={152}
                  comHeight={24}
                  compLeft={0}
                  compRight={10}
                  compType="RatingBar"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1440}
                ></RatingBar>
              </Column>
            </Row>
            <Row
              className="items-center w-[100%]"
              compId="9:351"
              comWidth={523}
              comHeight={220}
              compLeft={0}
              compRight={1109}
              compType="Row"
            >
              <Img
                src="images/img_placeholder_17.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                compId="9:354"
                comWidth={225}
                comHeight={175}
                compLeft={24}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[50px] xl:mr-[58px] 2xl:mr-[65px] 3xl:mr-[78px] mr-[87px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[33%]"
                compId="9:355"
                comWidth={171}
                comHeight={120}
                compLeft={16}
                compRight={87}
                compType="Column"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="188"
                  comWidth={171}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="9:356"
                    comWidth={171}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:357"
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
                      compId="9:358"
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
                  compId="179"
                  comWidth={152}
                  comHeight={24}
                  compLeft={0}
                  compRight={10}
                  compType="RatingBar"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1440}
                ></RatingBar>
              </Column>
            </Row>
            <Row
              className="items-center justify-center w-[100%]"
              compId="9:365"
              comWidth={522}
              comHeight={220}
              compLeft={555}
              compRight={555}
              compType="Row"
            >
              <Img
                src="images/img_placeholder_18.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                compId="9:368"
                comWidth={225}
                comHeight={175}
                compLeft={24}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] mr-[105px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[78px] 3xl:mr-[94px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[29%]"
                compId="9:369"
                comWidth={152}
                comHeight={120}
                compLeft={16}
                compRight={105}
                compType="Column"
              >
                <Column
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[87%]"
                  compId="9:370"
                  comWidth={132}
                  comHeight={80}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:371"
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
                    compId="9:372"
                    comWidth={60}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    $299
                  </Text>
                </Column>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="189"
                  comWidth={152}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <RatingBar
                    className=""
                    compId="180"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1440}
                  ></RatingBar>
                </Column>
              </Column>
            </Row>
            <Row
              className="items-center justify-center w-[100%]"
              compId="9:379"
              comWidth={523}
              comHeight={220}
              compLeft={1109}
              compRight={0}
              compType="Row"
            >
              <Img
                src="images/img_placeholder_19.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                compId="9:382"
                comWidth={225}
                comHeight={175}
                compLeft={24}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] mr-[106px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[79px] 3xl:mr-[95px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[29%]"
                compId="9:383"
                comWidth={152}
                comHeight={120}
                compLeft={16}
                compRight={106}
                compType="Column"
              >
                <Column
                  className="lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] w-[95%]"
                  compId="9:384"
                  comWidth={144}
                  comHeight={80}
                  compLeft={0}
                  compRight={8}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:385"
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
                    compId="9:386"
                    comWidth={60}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    $299
                  </Text>
                </Column>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="190"
                  comWidth={152}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <RatingBar
                    className=""
                    compId="181"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1440}
                  ></RatingBar>
                </Column>
              </Column>
            </Row>
            <Row
              className="items-center w-[100%]"
              compId="9:394"
              comWidth={523}
              comHeight={220}
              compLeft={0}
              compRight={1109}
              compType="Row"
            >
              <Img
                src="images/img_placeholder_20.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                compId="9:397"
                comWidth={225}
                comHeight={175}
                compLeft={24}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] mr-[34px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[43%]"
                compId="9:398"
                comWidth={224}
                comHeight={120}
                compLeft={16}
                compRight={34}
                compType="Column"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="191"
                  comWidth={224}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="9:399"
                    comWidth={224}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:400"
                      comWidth={224}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Black Sport Jacket
                    </Text>
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]"
                      compId="9:401"
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
                  compId="182"
                  comWidth={152}
                  comHeight={24}
                  compLeft={0}
                  compRight={10}
                  compType="RatingBar"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1440}
                ></RatingBar>
              </Column>
            </Row>
            <Row
              className="items-center justify-center w-[100%]"
              compId="9:408"
              comWidth={522}
              comHeight={220}
              compLeft={555}
              compRight={555}
              compType="Row"
            >
              <Img
                src="images/img_placeholder_21.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                compId="9:411"
                comWidth={225}
                comHeight={175}
                compLeft={24}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] mr-[105px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[78px] 3xl:mr-[94px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[29%]"
                compId="9:412"
                comWidth={152}
                comHeight={120}
                compLeft={16}
                compRight={105}
                compType="Column"
              >
                <Column
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[90%]"
                  compId="9:413"
                  comWidth={137}
                  comHeight={80}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                    compId="9:414"
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
                    compId="9:415"
                    comWidth={60}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    $299
                  </Text>
                </Column>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="192"
                  comWidth={152}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <RatingBar
                    className=""
                    compId="183"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1440}
                  ></RatingBar>
                </Column>
              </Column>
            </Row>
            <Row
              className="items-center justify-center w-[100%]"
              compId="9:422"
              comWidth={523}
              comHeight={220}
              compLeft={1109}
              compRight={0}
              compType="Row"
            >
              <Img
                src="images/img_placeholder_22.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                compId="9:425"
                comWidth={225}
                comHeight={175}
                compLeft={24}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[49px] xl:mr-[56px] 2xl:mr-[63px] 3xl:mr-[76px] mr-[85px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[33%]"
                compId="9:426"
                comWidth={173}
                comHeight={120}
                compLeft={16}
                compRight={85}
                compType="Column"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="193"
                  comWidth={173}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="9:427"
                    comWidth={173}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:428"
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
                      compId="9:429"
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
                  compId="184"
                  comWidth={152}
                  comHeight={24}
                  compLeft={0}
                  compRight={10}
                  compType="RatingBar"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1440}
                ></RatingBar>
              </Column>
            </Row>
          </Grid>
        </Column>
        <Column
          className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="9:40"
          comWidth={1920}
          comHeight={470}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]"
            compId="9:41"
            comWidth={286}
            comHeight={54}
            compLeft={144}
            compRight={144}
            compType="Text"
          >
            Why Choose Us
          </Text>
          <Column
            className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            compId="194"
            comWidth={1920}
            comHeight={384}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-gray_50 items-center w-[100%]"
              compId="9:42"
              comWidth={1920}
              comHeight={384}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <List
                className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 min-h-[auto] w-[85%]"
                compId="148"
                comWidth={1632}
                comHeight={384}
                compLeft={10}
                compRight={10}
                compType="List"
                orientation="horizontal"
              >
                <Column
                  className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center w-[100%]"
                  compId="9:44"
                  comWidth={384}
                  comHeight={384}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_icon_1.svg"
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63px] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    compId="9:45"
                    comWidth={120}
                    comHeight={120}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Column
                    className="lg:mb-[36px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[56px] mb-[63px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[55%]"
                    compId="9:51"
                    comWidth={211}
                    comHeight={106}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="195"
                      comWidth={211}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:mx-[14px] xl:mx-[17px] 2xl:mx-[19px] 3xl:mx-[22px] mx-[25.5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:52"
                        comWidth={160}
                        comHeight={36}
                        compLeft={25.5}
                        compRight={25.5}
                        compType="Text"
                      >
                        Free Delivery
                      </Text>
                    </Column>
                    <Text
                      className="font-normal leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[100%]"
                      compId="9:53"
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
                </Column>
                <Column
                  className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center w-[100%]"
                  compId="9:54"
                  comWidth={384}
                  comHeight={384}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_icon_2.svg"
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63px] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    compId="9:55"
                    comWidth={120}
                    comHeight={120}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Column
                    className="lg:mb-[36px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[56px] mb-[63px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[55%]"
                    compId="9:60"
                    comWidth={212}
                    comHeight={106}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:61"
                      comWidth={212}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Payment Method
                    </Text>
                    <Column
                      className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="196"
                      comWidth={212}
                      comHeight={54}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[100%]"
                        compId="9:62"
                        comWidth={211}
                        comHeight={54}
                        compLeft={0.5}
                        compRight={0.5}
                        compType="Text"
                      >
                        This free shipping
                        <br />
                        only for selected region
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column
                  className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center w-[100%]"
                  compId="9:63"
                  comWidth={384}
                  comHeight={384}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_icon_3.svg"
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63px] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    compId="9:64"
                    comWidth={120}
                    comHeight={120}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Column
                    className="items-center lg:mb-[36px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[56px] mb-[63px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[55%]"
                    compId="9:70"
                    comWidth={211}
                    comHeight={106}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                      compId="9:71"
                      comWidth={120}
                      comHeight={36}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >
                      Warranty
                    </Text>
                    <Text
                      className="font-normal leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[100%]"
                      compId="9:72"
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
                </Column>
                <Column
                  className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center w-[100%]"
                  compId="9:73"
                  comWidth={384}
                  comHeight={384}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_icon_4.svg"
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63px] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    compId="9:74"
                    comWidth={120}
                    comHeight={120}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Column
                    className="lg:mb-[36px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[56px] mb-[63px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[59%]"
                    compId="9:80"
                    comWidth={228}
                    comHeight={106}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="197"
                      comWidth={228}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]"
                        compId="9:81"
                        comWidth={228}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Customer Support
                      </Text>
                    </Column>
                    <Text
                      className="font-normal leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[93%]"
                      compId="9:82"
                      comWidth={211}
                      comHeight={54}
                      compLeft={8.5}
                      compRight={8.5}
                      compType="Text"
                    >
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Column>
        <Img
          src="images/img_brand.svg"
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68.29px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] object-contain w-[50%]"
          compId="9:436"
          comWidth={969.25}
          comHeight={68.29}
          compLeft={10}
          compRight={10}
          compType="Image"
          alt="brand"
        />
        <footer
          className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="9:441"
          comWidth={1920}
          comHeight={433}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-gray_800 items-center justify-end w-[100%]"
            compId="154"
            comWidth={1920}
            comHeight={433}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] mr-[auto] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[80%]"
              compId="9:445"
              comWidth={1540}
              comHeight={235}
              compLeft={144}
              compRight={144}
              compType="Row"
            >
              <Column
                className="lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] w-[28%]"
                compId="9:480"
                comWidth={424}
                comHeight={209}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                  compId="9:487"
                  comWidth={238}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  Join our Newsletter
                </Text>
                <Text
                  className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[100%]"
                  compId="9:488"
                  comWidth={424}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Drop your email below to get update about us, <br />
                  lastest news, tips, and more!
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic opacity-op5 p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 tracking-ls1 w-[100%]"
                  wrapClassName="2xl:ml-[18px] 2xl:my-[12px] 2xl:pb-[11px] 2xl:pr-[12px] 2xl:pt-[10px] 3xl:mb-[15px] 3xl:ml-[21px] 3xl:mt-[14px] 3xl:pb-[13px] 3xl:pr-[14px] 3xl:pt-[12px] bg-white_A700 flex lg:ml-[14px] lg:my-[9px] lg:pr-[9px] lg:py-[8px] mb-[17px] ml-[24px] mt-[16px] pb-[15px] pl-[0] pr-[16px] pt-[14px] w-[91%] xl:mb-[11px] xl:ml-[16px] xl:mt-[10px] xl:pb-[10px] xl:pr-[10px] xl:pt-[9px]"
                  compId="9:486"
                  comWidth={0}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Enteryouremai"
                  placeholder=""
                  suffix={
                    <Img
                      src="images/img_arrow_1.svg"
                      className="w-[32px] ml-[161px] lg:w-[18px] lg:ml-[93px] xl:w-[21px] xl:ml-[107px] 2xl:w-[24px] 2xl:ml-[120px] 3xl:w-[28px] 3xl:ml-[144px] my-[auto]"
                      compId="9:483"
                      comWidth={32}
                      comHeight={31}
                      compLeft={161}
                      compRight={0}
                      compType="Image"
                      alt="Arrow"
                    />
                  }
                ></Input>
              </Column>
              <Column
                className="lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] 3xl:ml-[117px] ml-[131px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] w-[11%]"
                compId="9:461"
                comWidth={166}
                comHeight={216}
                compLeft={131}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                  compId="9:462"
                  comWidth={166}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Product Links
                </Text>
                <Column
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[61%]"
                  compId="9:463"
                  comWidth={101}
                  comHeight={156}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                    compId="9:464"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={1}
                    compType="Text"
                  >
                    Categories
                  </Text>
                  <Text
                    className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                    compId="9:465"
                    comWidth={101}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    New Arrival
                  </Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                    compId="9:466"
                    comWidth={78}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    Features
                  </Text>
                  <Text
                    className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                    compId="9:467"
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
                className="3xl:ml-[100px] ml-[112px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[8%]"
                compId="9:446"
                comWidth={123}
                comHeight={235}
                compLeft={112}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                  compId="9:453"
                  comWidth={123}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Company
                </Text>
                <Column
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[61%]"
                  compId="9:447"
                  comWidth={75}
                  comHeight={175}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                    compId="9:448"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    About
                  </Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                    compId="9:449"
                    comWidth={40}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    Blog
                  </Text>
                  <Text
                    className="font-normal mr-[3px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                    compId="9:450"
                    comWidth={72}
                    comHeight={27}
                    compLeft={0}
                    compRight={3}
                    compType="Text"
                  >
                    Careers
                  </Text>
                  <Text
                    className="font-normal mr-[1px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                    compId="9:451"
                    comWidth={74}
                    comHeight={27}
                    compLeft={0}
                    compRight={1}
                    compType="Text"
                  >
                    Contact
                  </Text>
                  <Text
                    className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                    compId="9:452"
                    comWidth={75}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Services
                  </Text>
                </Column>
              </Column>
              <Column
                className="lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37px] xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] ml-[154px] lg:ml-[89px] w-[10%]"
                compId="9:454"
                comWidth={147}
                comHeight={198}
                compLeft={154}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                  compId="9:460"
                  comWidth={99}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  Support
                </Text>
                <Column
                  className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="198"
                  comWidth={147}
                  comHeight={138}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="9:455"
                    comWidth={147}
                    comHeight={138}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                      compId="9:456"
                      comWidth={138}
                      comHeight={27}
                      compLeft={0}
                      compRight={9}
                      compType="Text"
                    >
                      Support Center
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                      compId="9:457"
                      comWidth={36}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      FAQ
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                      compId="9:458"
                      comWidth={122}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      Privacy Policy
                    </Text>
                    <Text
                      className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]"
                      compId="9:459"
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
              </Column>
              <Column
                className="xl:mb-[100px] 2xl:mb-[113px] 3xl:mb-[135px] mb-[151px] lg:mb-[88px] 3xl:ml-[117px] ml-[130px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[10%]"
                compId="9:468"
                comWidth={153}
                comHeight={84}
                compLeft={130}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]"
                  compId="9:479"
                  comWidth={153}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Get In Touch
                </Text>
                <Img
                  src="images/img_sosmedia.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] object-contain w-[78%]"
                  compId="9:469"
                  comWidth={120}
                  comHeight={24}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt="sosmedia"
                />
              </Column>
            </Row>
            <Text
              className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-white_A700 w-[auto]"
              compId="9:443"
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

export default HomepageV1Page;
