import React from "react";

import {
  Column,
  List,
  RadioGroup,
  Radio,
  Row,
  Text,
  Input,
  TextArea,
  FloatingInput,
  SelectBox,
  Datepicker,
  Img,
  CheckBox,
  RatingBar,
  Stack,
  Switch,
  Button,
} from "components";
import { postUsers, getUsers } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as c2 from "constants/c2";
import * as c1 from "constants/c1";
import useForm from "simple-react-hook-form";

const Frame1Page = () => {
  const [apiData1, setapiData1] = React.useState();
  const form = useForm({ address: "", std: 0 });
  const [apiData2, setapiData2] = React.useState();
  const form1 = useForm({
    address: "",
    name: { firstname: "" },
    dropdown: "",
    ddff: { dfsd: { sdds: "" } },
    std: 0,
    checkbox: false,
    radio: "",
    falsecheckbox: false,
    dp1: "",
    dp2: "",
    dp3: "",
    switch: false,
  });
  const navigate = useNavigate();
  const [apiData3, setapiData3] = React.useState();
  React.useEffect(() => {
    callApi3();
  }, []);

  function callApi1(data) {
    const req = { data: { ...data } };
    postUsers(req)
      .then((res) => {
        setapiData1(res);
        form1.handleChange("dp1", res?.response?.input1);
        toast.success("success");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi2(data) {
    const req = {
      params: { sdasd: JSON.parse(localStorage.getItem("items")) },
      data: { ...data },
    };
    postUsers(req)
      .then((res) => {
        setapiData2(res);
        form1.handleChange("dropdown", res?.response?.input1);
        navigate("/", {
          state: { a1: apiData3?.response?.requestId, a2: c2?.array },
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error");
      });
  }
  function callApi3() {
    const req = {};
    getUsers(req)
      .then((res) => {
        setapiData3(res);

        localStorage.setItem("items", JSON.stringify(res?.response?.items));
        form1.handleChange("name.firstname", res?.response?.requestId);
        form.handleChange("std", res?.response?.count);
        form1.handleChange("std", res?.response?.count);
        form1.handleChange("ddff.dfsd.sdds", res?.response?.anyKey);
        form.handleChange("address", res?.response?.items?.response?.firstName);
        form1.handleChange(
          "address",
          res?.response?.items?.response?.firstName
        );
        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        navigate("/", { state: { a1: c1?.json, a2: c2?.json, a3: c2?.array } });
      });
  }

  return (
    <>
      <Column
        className="bg-white_A700 items-center mx-[auto] w-[100%]"
        compId="1:4"
        comWidth={1440}
        comHeight={1817}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[100%]"
          compId="122"
          comWidth={1440}
          comHeight={1391}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <List
            className="font-raleway gap-[0] min-h-[auto] w-[30%]"
            compId="115"
            comWidth={437}
            comHeight={88}
            compLeft={10}
            compRight={10}
            compType="List"
            orientation="vertical"
          >
            <RadioGroup
              selectedValue="Mobile Design"
              className="flex lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[100%]"
              compId="114"
              comWidth={437}
              comHeight={24}
              compLeft={0}
              compRight={0}
              compType="RadioGroup"
              name="Group114"
            >
              <Radio
                value={true}
                className="font-bold lg:mr-[230px] xl:mr-[263px] mr-[296px] 3xl:mr-[355px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900"
                inputClassName="border-2 border-indigo_600 border-solid mr-[5px] w-[undefinedpx]"
                compId="17"
                comWidth={141}
                comHeight={24}
                compLeft={0}
                compRight={296}
                compType="Radio"
                name="Group114"
                label="MobileDesign"
              ></Radio>
              <Radio
                value={false}
                className="font-bold lg:ml-[125px] xl:ml-[143px] ml-[161px] 3xl:ml-[193px] lg:mr-[105px] xl:mr-[120px] mr-[135px] 3xl:mr-[162px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900"
                inputClassName="border-2 border-gray_700 border-solid mr-[5px] w-[undefinedpx]"
                compId="14"
                comWidth={141}
                comHeight={24}
                compLeft={161}
                compRight={135}
                compType="Radio"
                name="Group114"
                label="MobileDesign1"
              ></Radio>
              <Radio
                value={false}
                className="font-bold lg:ml-[249px] xl:ml-[285px] ml-[321px] 3xl:ml-[385px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900"
                inputClassName="border-2 border-gray_700 border-solid mr-[5px] w-[undefinedpx]"
                compId="18"
                comWidth={116}
                comHeight={24}
                compLeft={321}
                compRight={0}
                compType="Radio"
                name="Group114"
                label="Illustration"
              ></Radio>
            </RadioGroup>
            <Row
              className="justify-between lg:mr-[31px] xl:mr-[35px] mr-[40px] 3xl:mr-[48px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[91%]"
              compId="1:11"
              comWidth={397}
              comHeight={24}
              compLeft={0}
              compRight={40}
              compType="Row"
            >
              <RadioGroup
                className="flex w-[78%]"
                compId="127"
                comWidth={309}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="RadioGroup"
                name="Group127"
              >
                <Radio
                  value={false}
                  className="font-bold lg:mr-[133px] xl:mr-[153px] mr-[172px] 3xl:mr-[206px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900"
                  inputClassName="border-2 border-gray_700 border-solid mr-[5px] w-[undefinedpx]"
                  compId="16"
                  comWidth={137}
                  comHeight={24}
                  compLeft={0}
                  compRight={172}
                  compType="Radio"
                  name="Group127"
                  label="Development"
                ></Radio>
                <Radio
                  value={false}
                  className="font-bold lg:ml-[124px] xl:ml-[142px] ml-[160px] 3xl:ml-[192px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900"
                  inputClassName="border-2 border-gray_700 border-solid mr-[5px] w-[undefinedpx]"
                  compId="15"
                  comWidth={149}
                  comHeight={24}
                  compLeft={160}
                  compRight={0}
                  compType="Radio"
                  name="Group127"
                  label="MotionGraphic"
                ></Radio>
              </RadioGroup>
              <Text
                className="font-bold mb-[2px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                compId="1:13"
                comWidth={44}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Other
              </Text>
            </Row>
          </List>
          <Column
            className="font-poppins items-center lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] w-[100%]"
            compId="121"
            comWidth={1440}
            comHeight={734}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Input
              className="bg-transparent border-0 border-b-[1px] border-bluegray_100 border-solid font-medium lg:pb-[26px] xl:pb-[30px] pb-[34.55px] 2xl:pb-[34px] 3xl:pb-[41px] pl-[0] pt-[1.55px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-gray_800 text-gray_800 w-[100%]"
              wrapClassName="3xl:mx-[12px] lg:mx-[7px] mx-[10px] w-[46%] xl:mx-[8px]"
              compId="13"
              comWidth={661}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="EditText"
              onChange={(e) => {
                form1.handleChange("name.firstname", e.target.value);
              }}
              value={form1?.values?.name?.firstname}
              name="Group13"
              placeholder="Buyer Info"
            ></Input>
            <Column
              className="lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[46%]"
              compId="4"
              comWidth={661}
              comHeight={103}
              compLeft={10}
              compRight={10}
              compType="Column"
            >
              <Text
                className="common-pointer font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]"
                compId="1:51"
                comWidth={89}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="Text"
                onClick={() => {
                  form.handleSubmit(callApi1);
                }}
              >
                Full Name
              </Text>
              <TextArea
                className="bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] placeholder:text-gray_500 w-[100%]"
                compId="3"
                comWidth={661}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="TextArea"
                onChange={(e) => {
                  form.handleChange("address", e.target.value);
                  form1.handleChange("address", e.target.value);
                }}
                value={form1?.values?.address}
                name="Group3"
                placeholder="Full Name"
              ></TextArea>
            </Column>
            <Column
              className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[46%]"
              compId="6"
              comWidth={661}
              comHeight={103}
              compLeft={10}
              compRight={10}
              compType="Column"
            >
              <Text
                className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]"
                compId="1:54"
                comWidth={74}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="Text"
              >
                Address
              </Text>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border border-bluegray_100 border-solid placeholder:left-[0] placeholder:text-gray_500 placeholder:top-[0] top-[0] w-[100%]"
                compId="5"
                comWidth={661}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="FloatingTextField"
                onChange={(e) => {
                  form1.handleChange("ddff.dfsd.sdds", e);
                }}
                value={form1?.values?.ddff?.dfsd?.sdds}
                name="Group5"
                labelClasses="bg-white_A700 left-[0] top-[0] text-gray_500"
                focusedClasses=""
                wrapperClasses="w-[100%] mt-[16px] top-[0]"
                labelText="Address"
                defaultText=""
              ></FloatingInput>
            </Column>
            <Column
              className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[46%]"
              compId="8"
              comWidth={661}
              comHeight={103}
              compLeft={10}
              compRight={10}
              compType="Column"
            >
              <Text
                className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]"
                compId="1:57"
                comWidth={74}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="Text"
              >
                Contact
              </Text>
              <SelectBox
                className="bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
                compId="7"
                comWidth={661}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Dropdown"
                onChange={(e) => {
                  form1.handleChange("dropdown", e);
                }}
                value={form1?.values?.dropdown}
                placeholderClassName="bg-transparent text-gray_500"
                name="Group7"
                placeholder="Contact"
                isSearchable={true}
                isMulti={false}
              ></SelectBox>
            </Column>
            <Column
              className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[46%]"
              compId="10"
              comWidth={661}
              comHeight={103}
              compLeft={10}
              compRight={10}
              compType="Column"
            >
              <Text
                className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]"
                compId="1:60"
                comWidth={36}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="Text"
              >
                City
              </Text>
              <Datepicker
                className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] placeholder:text-gray_500 w-[100%]"
                compId="9"
                comWidth={661}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="DatePicker"
                onChange={(e) => {
                  form1.handleChange("dp1", e);
                }}
                value={form1?.values?.dp1}
                name="Group9"
                placeholder="City"
              ></Datepicker>
            </Column>
            <Row
              className="items-center justify-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
              compId="116"
              comWidth={1440}
              comHeight={103}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="lg:ml-[302px] xl:ml-[346px] ml-[389px] 3xl:ml-[467px] w-[27%]"
                compId="1:61"
                comWidth={384}
                comHeight={103}
                compLeft={389}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]"
                  compId="1:67"
                  comWidth={48}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  State
                </Text>
                <Datepicker.Time
                  className="placeholder:bg-transparent bg-transparent font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                  compId="2"
                  comWidth={0}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="DatePicker"
                  onChange={(e) => {
                    form1.handleChange("dp2", e);
                  }}
                  value={form1?.values?.dp2}
                  name="Group2"
                  placeholder="Select State"
                ></Datepicker.Time>
              </Column>
              <Column
                className="lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mr-[303px] xl:mr-[346px] mr-[390px] 3xl:mr-[468px] w-[17%]"
                compId="12"
                comWidth={245}
                comHeight={103}
                compLeft={32}
                compRight={390}
                compType="Column"
              >
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]"
                  compId="1:70"
                  comWidth={80}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  Zip Code
                </Text>
                <Datepicker.Range
                  className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] placeholder:text-gray_500 w-[100%]"
                  compId="11"
                  comWidth={245}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="DatePicker"
                  onChange={(e) => {
                    form1.handleChange("dp3", e);
                  }}
                  startDate={form1?.values?.dp3[0]}
                  endDate={form1?.values?.dp3[1]}
                  name="Group11"
                  placeholder="Zip Code"
                ></Datepicker.Range>
              </Column>
            </Row>
          </Column>
          <Row
            className="font-poppins justify-center 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] mt-[87px] w-[100%]"
            compId="124"
            comWidth={1440}
            comHeight={231}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="lg:ml-[303px] xl:ml-[346px] ml-[390px] 3xl:ml-[468px] w-[12%]"
              compId="1:72"
              comWidth={166}
              comHeight={231}
              compLeft={390}
              compRight={0}
              compType="Column"
            >
              <CheckBox
                className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_500"
                inputClassName="border-bluegray_100 border-bw3 border-solid mr-[5px] w-[undefinedpx]"
                compId="19"
                comWidth={110}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="CheckBox"
                onChange={(e) => {
                  form1.handleChange("checkbox", e.target.checked);
                }}
                checked={Boolean(form1?.values?.checkbox)}
                name="Group19"
                label="All Price"
              ></CheckBox>
              <Row
                className="items-center mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[87%]"
                compId="1:77"
                comWidth={144}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Img
                  src="images/img_checkedbox.svg"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] mt-[2px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="1:78"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Checkedbox"
                />
                <Text
                  className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]"
                  compId="1:81"
                  comWidth={104}
                  comHeight={27}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >
                  $100 - $250
                </Text>
              </Row>
              <Radio
                value={false}
                className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_500"
                inputClassName="border-bluegray_100 border-bw3 border-solid mr-[5px] w-[undefinedpx]"
                compId="20"
                comWidth={149}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="Radio"
                onChange={(e) => {
                  form1.handleChange("radio", e.target.value);
                }}
                name="Group20"
                label="undefined"
              ></Radio>
              <CheckBox
                className="font-normal lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_500"
                inputClassName="border-bluegray_100 border-bw3 border-solid mr-[5px] w-[undefinedpx]"
                compId="21"
                comWidth={158}
                comHeight={27}
                compLeft={0}
                compRight={8}
                compType="CheckBox"
                onChange={(e) => {
                  form1.handleChange("falsecheckbox", e.target.checked);
                }}
                checked={Boolean(form1?.values?.falsecheckbox)}
                name="Group21"
                label="$750 - $1.000"
              ></CheckBox>
              <Column
                className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                compId="129"
                comWidth={166}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <CheckBox
                  className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_500 w-[100%]"
                  inputClassName="border-bluegray_100 border-bw3 border-solid mr-[5px] w-[undefinedpx]"
                  compId="22"
                  comWidth={166}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="CheckBox"
                  name="Group22"
                  label="$1000 - $1.500"
                ></CheckBox>
              </Column>
            </Column>
            <Column
              className="font-lato 3xl:mb-[110px] lg:mb-[71px] xl:mb-[81px] mb-[92px] lg:ml-[162px] xl:ml-[185px] ml-[209px] 3xl:ml-[250px] lg:mr-[379px] xl:mr-[434px] mr-[488px] 3xl:mr-[585px] mt-[2px] w-[13%]"
              compId="123"
              comWidth={187}
              comHeight={137}
              compLeft={209}
              compRight={488}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="130"
                comWidth={187}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <RatingBar
                  className="lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px]"
                  compId="128"
                  comWidth={152}
                  comHeight={24}
                  compLeft={6}
                  compRight={10}
                  compType="RatingBar"
                  onChange={(e) => {
                    form.handleChange("std", e);
                    form1.handleChange("std", e);
                  }}
                  value={form1?.values?.std}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1440}
                  isEditable={true}
                ></RatingBar>
              </Column>
              <Stack
                className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[100%]"
                compId="126"
                comWidth={187}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Img
                  src="images/img_menucentermed.svg"
                  className="absolute lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] inset-[0] object-cover w-[100%]"
                  compId="1:164"
                  comWidth={187}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MenuCenterMed"
                />
                <Switch
                  compId="23"
                  comWidth={59}
                  comHeight={32}
                  compLeft={24}
                  compRight={0}
                  compType="Switch"
                  onChange={(e) => {
                    form1.handleChange("switch", e);
                  }}
                  value={form1?.values?.switch}
                  onColor="#2c95ee"
                  offColor=""
                  onHandleColor="#ffffff"
                  offHandleColor=""
                  className="absolute inset-y-[0] left-[13%] my-[auto] w-[32%]"
                />
              </Stack>
              <Column
                className="mt-[2px] w-[100%]"
                compId="131"
                comWidth={187}
                comHeight={21}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center lg:mx-[10px] xl:mx-[12px] mx-[14px] 3xl:mx-[16px] w-[74%]"
                  compId="1:188"
                  comWidth={138}
                  comHeight={21}
                  compLeft={14}
                  compRight={14}
                  compType="Row"
                >
                  <Img
                    src="images/img_checkboxchecke.svg"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] my-[2.5px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    compId="1:189"
                    comWidth={16}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="checkboxchecke"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="1:190"
                    comWidth={110}
                    comHeight={21}
                    compLeft={12}
                    compRight={0}
                    compType="Text"
                  >
                    Keep me signed in
                  </Text>
                </Row>
              </Column>
            </Column>
          </Row>
          <Button
            className="common-pointer bg-gradient  font-bold font-lato lg:mt-[114px] xl:mt-[130px] mt-[147px] 3xl:mt-[176px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 tracking-ls1 w-[27%]"
            compId="1"
            comWidth={390}
            comHeight={44}
            compLeft={10}
            compRight={10}
            compType="Button"
            onClick={() => {
              form1.handleSubmit(callApi2);
            }}
          >
            Sign in
          </Button>
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default Frame1Page;
