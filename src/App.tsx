import React, { useState } from "react";
import ShadowAccordion from "./lib/component/ShadowAccordian/ShadowAccordion";
import ShadowButton from "./lib/component/ShadowButton/ShadowButton";
import "./App.scss";
import ShadowAreaAction from "./lib/component/ShadowAreaAction/ShadowAreaAction";
import ShadowAvatar from "./lib/component/ShadowAvatar/ShadowAvatar";
import ShadowBadge from "./lib/component/ShadowBadge/ShadowBadge";
import ShadowBanner from "./lib/component/ShadowBanner/ShadowBanner";
import ShadowCalendar from "./lib/component/ShadowCalender/ShadowCalendar";
import ShadowCard from "./lib/component/ShadowCard/ShadowCard";
import ShadowChart from "./lib/component/ShadowChart/ShadowChart";
import ShadowCheckbox from "./lib/component/ShadowCheckbox/ShadowCheckbox";
import ShadowChip from "./lib/component/ShadowChip/ShadowChip";
import ShadowDialog from "./lib/component/ShadowDialog/ShadowDialog";
import ShadowDropbox from "./lib/component/ShadowDropbox/ShadowDropbox";
import ShadowDropdown from "./lib/component/ShadowDropdown/ShadowDropdown";
import ShadowTag from "./lib/component/ShadowTag/ShadowTag";
import { TieredMenu } from "primereact/tieredmenu";

function App() {
   const [displayDialog, setDisplayDialog] = useState(false);

   const tieredMenuSelectEvent = (event: any, index?: number) => {
     setDisplayDialog(false);
     alert(JSON.stringify(event) + index);
   };
  const shadowBanner5: any = {
    severity: "warn",
    summary: "this is summary",
    buttonGroup: [
      {
        label: "text brand",
        icon: "pi pi-users",
        buttonActionStyle: "warning",
        buttonType: "primary",
      },
    ],
  };
  const cardOption: any = {
    isDragable: true,
    showAction: true,
    title: "Across divisions improvements",
  };

  const tieredMenuItem: any[] = [
    {
      label: "Home",
      url: "/",
      icon: "pi pi-home",
      className: "danger",
    },
    {
      label: "Boards",
      url: "/boards",
      icon: "pi pi-th-large",
      useTemplate: true,
    },
  ];
  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const barChartData: any = {
    chart: {
      type: "tilemap",
      inverted: true,
      height: "80%",
    },

    title: {
      text: "U.S. states by population in 2016",
      style: {
        fontSize: "1em",
      },
    },

    subtitle: {
      text: 'Source:<a href="https://simple.wikipedia.org/wiki/List_of_U.S._states_by_population">Wikipedia</a>',
    },

    xAxis: {
      visible: false,
    },

    yAxis: {
      visible: false,
    },

    colorAxis: {
      dataClasses: [
        {
          from: 0,
          to: 1000000,
          color: "#F9EDB3",
          name: "< 1M",
        },
        {
          from: 1000000,
          to: 5000000,
          color: "#FFC428",
          name: "1M - 5M",
        },
        {
          from: 5000000,
          to: 20000000,
          color: "#FF7987",
          name: "5M - 20M",
        },
        {
          from: 20000000,
          color: "#FF2371",
          name: "> 20M",
        },
      ],
    },

    tooltip: {
      headerFormat: "",
      pointFormat:
        "The population of <b> {point.name}</b> is <b>{point.value}</b>",
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.hc-a2}",
          color: "#000000",
          style: {
            textOutline: false,
          },
        },
      },
    },

    series: [
      {
        name: "",
        data: [
          {
            "hc-a2": "AL",
            name: "Alabama",
            region: "South",
            x: 6,
            y: 7,
            value: 4849377,
          },
          {
            "hc-a2": "AK",
            name: "Alaska",
            region: "West",
            x: 0,
            y: 0,
            value: 737732,
          },
          {
            "hc-a2": "AZ",
            name: "Arizona",
            region: "West",
            x: 5,
            y: 3,
            value: 6745408,
          },
          {
            "hc-a2": "AR",
            name: "Arkansas",
            region: "South",
            x: 5,
            y: 6,
            value: 2994079,
          },
          {
            "hc-a2": "CA",
            name: "California",
            region: "West",
            x: 5,
            y: 2,
            value: 39250017,
          },
          {
            "hc-a2": "CO",
            name: "Colorado",
            region: "West",
            x: 4,
            y: 3,
            value: 5540545,
          },
          {
            "hc-a2": "CT",
            name: "Connecticut",
            region: "Northeast",
            x: 3,
            y: 11,
            value: 3596677,
          },
          {
            "hc-a2": "DE",
            name: "Delaware",
            region: "South",
            x: 4,
            y: 9,
            value: 935614,
          },
          {
            "hc-a2": "DC",
            name: "District of Columbia",
            region: "South",
            x: 4,
            y: 10,
            value: 7288000,
          },
          {
            "hc-a2": "FL",
            name: "Florida",
            region: "South",
            x: 8,
            y: 8,
            value: 20612439,
          },
          {
            "hc-a2": "GA",
            name: "Georgia",
            region: "South",
            x: 7,
            y: 8,
            value: 10310371,
          },
          {
            "hc-a2": "HI",
            name: "Hawaii",
            region: "West",
            x: 8,
            y: 0,
            value: 1419561,
          },
          {
            "hc-a2": "ID",
            name: "Idaho",
            region: "West",
            x: 3,
            y: 2,
            value: 1634464,
          },
          {
            "hc-a2": "IL",
            name: "Illinois",
            region: "Midwest",
            x: 3,
            y: 6,
            value: 12801539,
          },
          {
            "hc-a2": "IN",
            name: "Indiana",
            region: "Midwest",
            x: 3,
            y: 7,
            value: 6596855,
          },
          {
            "hc-a2": "IA",
            name: "Iowa",
            region: "Midwest",
            x: 3,
            y: 5,
            value: 3107126,
          },
          {
            "hc-a2": "KS",
            name: "Kansas",
            region: "Midwest",
            x: 5,
            y: 5,
            value: 2904021,
          },
          {
            "hc-a2": "KY",
            name: "Kentucky",
            region: "South",
            x: 4,
            y: 6,
            value: 4413457,
          },
          {
            "hc-a2": "LA",
            name: "Louisiana",
            region: "South",
            x: 6,
            y: 5,
            value: 4649676,
          },
          {
            "hc-a2": "ME",
            name: "Maine",
            region: "Northeast",
            x: 0,
            y: 11,
            value: 1330089,
          },
          {
            "hc-a2": "MD",
            name: "Maryland",
            region: "South",
            x: 4,
            y: 8,
            value: 6016447,
          },
          {
            "hc-a2": "MA",
            name: "Massachusetts",
            region: "Northeast",
            x: 2,
            y: 10,
            value: 6811779,
          },
          {
            "hc-a2": "MI",
            name: "Michigan",
            region: "Midwest",
            x: 2,
            y: 7,
            value: 9928301,
          },
          {
            "hc-a2": "MN",
            name: "Minnesota",
            region: "Midwest",
            x: 2,
            y: 4,
            value: 5519952,
          },
          {
            "hc-a2": "MS",
            name: "Mississippi",
            region: "South",
            x: 6,
            y: 6,
            value: 2984926,
          },
          {
            "hc-a2": "MO",
            name: "Missouri",
            region: "Midwest",
            x: 4,
            y: 5,
            value: 6093000,
          },
          {
            "hc-a2": "MT",
            name: "Montana",
            region: "West",
            x: 2,
            y: 2,
            value: 1023579,
          },
          {
            "hc-a2": "NE",
            name: "Nebraska",
            region: "Midwest",
            x: 4,
            y: 4,
            value: 1881503,
          },
          {
            "hc-a2": "NV",
            name: "Nevada",
            region: "West",
            x: 4,
            y: 2,
            value: 2839099,
          },
          {
            "hc-a2": "NH",
            name: "New Hampshire",
            region: "Northeast",
            x: 1,
            y: 11,
            value: 1326813,
          },
          {
            "hc-a2": "NJ",
            name: "New Jersey",
            region: "Northeast",
            x: 3,
            y: 10,
            value: 8944469,
          },
          {
            "hc-a2": "NM",
            name: "New Mexico",
            region: "West",
            x: 6,
            y: 3,
            value: 2085572,
          },
          {
            "hc-a2": "NY",
            name: "New York",
            region: "Northeast",
            x: 2,
            y: 9,
            value: 19745289,
          },
          {
            "hc-a2": "NC",
            name: "North Carolina",
            region: "South",
            x: 5,
            y: 9,
            value: 10146788,
          },
          {
            "hc-a2": "ND",
            name: "North Dakota",
            region: "Midwest",
            x: 2,
            y: 3,
            value: 739482,
          },
          {
            "hc-a2": "OH",
            name: "Ohio",
            region: "Midwest",
            x: 3,
            y: 8,
            value: 11614373,
          },
          {
            "hc-a2": "OK",
            name: "Oklahoma",
            region: "South",
            x: 6,
            y: 4,
            value: 3878051,
          },
          {
            "hc-a2": "OR",
            name: "Oregon",
            region: "West",
            x: 4,
            y: 1,
            value: 3970239,
          },
          {
            "hc-a2": "PA",
            name: "Pennsylvania",
            region: "Northeast",
            x: 3,
            y: 9,
            value: 12784227,
          },
          {
            "hc-a2": "RI",
            name: "Rhode Island",
            region: "Northeast",
            x: 2,
            y: 11,
            value: 1055173,
          },
          {
            "hc-a2": "SC",
            name: "South Carolina",
            region: "South",
            x: 6,
            y: 8,
            value: 4832482,
          },
          {
            "hc-a2": "SD",
            name: "South Dakota",
            region: "Midwest",
            x: 3,
            y: 4,
            value: 853175,
          },
          {
            "hc-a2": "TN",
            name: "Tennessee",
            region: "South",
            x: 5,
            y: 7,
            value: 6651194,
          },
          {
            "hc-a2": "TX",
            name: "Texas",
            region: "South",
            x: 7,
            y: 4,
            value: 27862596,
          },
          {
            "hc-a2": "UT",
            name: "Utah",
            region: "West",
            x: 5,
            y: 4,
            value: 2942902,
          },
          {
            "hc-a2": "VT",
            name: "Vermont",
            region: "Northeast",
            x: 1,
            y: 10,
            value: 626011,
          },
          {
            "hc-a2": "VA",
            name: "Virginia",
            region: "South",
            x: 5,
            y: 8,
            value: 8411808,
          },
          {
            "hc-a2": "WA",
            name: "Washington",
            region: "West",
            x: 2,
            y: 1,
            value: 7288000,
          },
          {
            "hc-a2": "WV",
            name: "West Virginia",
            region: "South",
            x: 4,
            y: 7,
            value: 1850326,
          },
          {
            "hc-a2": "WI",
            name: "Wisconsin",
            region: "Midwest",
            x: 2,
            y: 5,
            value: 5778708,
          },
          {
            "hc-a2": "WY",
            name: "Wyoming",
            region: "West",
            x: 3,
            y: 3,
            value: 584153,
          },
        ],
      },
    ],
  };
  const chips: any[] = [
    { key: "Chip1", label: "Chip1", removable: true },
    { key: "Chip2", label: "Chip2", removable: true },
    { key: "Chip3", label: "Chip3", removable: true },
    { key: "Chip4", label: "Chip4", removable: true },
    { key: "Chip5", label: "Chip5", removable: true },
    { key: "Chip6", label: "Chip6", removable: true },
    { key: "Chip7", label: "Chip7", removable: true },
    { key: "Chip8", label: "Chip8", removable: true },
    { key: "Chip9", label: "Chip9", removable: true },
    { key: "Chip10", label: "Chip10", removable: true },
    { key: "Chip11", label: "Chip11", removable: true },
    { key: "Chip12", label: "Chip12", removable: true },
    { key: "Chip13", label: "Chip13", removable: true },
    { key: "Chip14", label: "Chip14", removable: true },
    { key: "Chip15", label: "Chip15", removable: true },
  ];
  const cards: any[] = [
    {
      isDragable: false,
      showAction: true,
      isDisplayDragHandle: true,
      dragboxCardWidth: "50%",
      title: "card 1",
      dropDownPosition: "right",
      menuItems: [{ label: "Test1" }, { label: "Test2" }, { label: "Test3" }],
    },
    {
      isDragable: true,
      showAction: true,
      isDisplayDragHandle: true,
      dragboxCardWidth: "50%",
      title: "card 2",
      dropDownPosition: "right",
      menuItems: [{ label: "Test4" }, { label: "Test5" }, { label: "Test6" }],
    },
    {
      isDragable: true,
      showAction: true,
      dragboxCardWidth: "25%",
      title: "card 3",
      dropDownPosition: "right",
      dropDownOption: {},
    },
    {
      isDragable: true,
      showAction: true,
      dragboxCardWidth: "25%",
      title: "card 4",
      dropDownPosition: "right",
      dropDownOption: {},
    },
    {
      isDragable: true,
      showAction: true,
      dragboxCardWidth: "25%",
      title: "card 5",
      dropDownPosition: "right",
      dropDownOption: {},
    },
    {
      isDragable: true,
      showAction: true,
      dragboxCardWidth: "25%",
      title: "card 6",
      dropDownPosition: "right",
      dropDownOption: {},
    },
    {
      isDragable: true,
      showAction: true,
      dragboxCardWidth: "75%",
      title: "card 7",
      dropDownPosition: "right",
      dropDownOption: {},
    },
  ];
    const dropdownoptions: any[] = [
      {
        label: "option 1",
        value: 1,
      },
      {
        label: "option 2",
        value: 2,
        icon: "pi pi-pencil",
      },
      {
        label: "option 33",
        value: 3,
        icon: "pi pi-users",
      },
    ];
  return (
    <div className="component-container">
      <div>
        <ShadowAccordion />
      </div>
      <div>
        <ShadowAreaAction />
      </div>
      <div>
        <ShadowAvatar type="initials" initials="Sk"></ShadowAvatar>
      </div>
      <div>
        <ShadowBadge badge={{ value: "0" }} />
      </div>
      <div>
        <ShadowBanner />
        <ShadowBanner shadowBanner={shadowBanner5} />
      </div>
      <div>
        <ShadowButton
          label="default"
          onButtonClick={() => setDisplayDialog(true)}
        />
      </div>
      <div>
        <ShadowCalendar />
      </div>
      <div>
        <ShadowCard cardOption={cardOption} menuItem={tieredMenuItem}>
          <p>
            <i className={"hds-icon hds-insights-fill"}></i>
            Company Growth Potential: Actions identified predicted to generate
            incremental <b>$140MM</b> in sales and <b>30MM</b> in profit
          </p>
          <br></br>
          <ShadowChart
            shadowChartMetaData={barChartData}
            displayGridLines={true}
          ></ShadowChart>
        </ShadowCard>
      </div>
      <div>
        <ShadowCheckbox />
      </div>
      <div style={{ width: 710 }}>
        <ShadowChip chipList={chips} hideOverflow={true} />
      </div>
      <div>
        dialog box just clicl to upper button component
        <ShadowDialog
          display={displayDialog}
          modal={true}
          closable={true}
          closeOnBlur={true}
          footer={{ type: "confirm" }}
          title={"Test Confirm"}
          width={"400px"}
          position="top"
          handleCancel={tieredMenuSelectEvent}
          handleOk={tieredMenuSelectEvent}
          displayChange={() => setDisplayDialog(false)}
        >
          <p>Hello world</p>
        </ShadowDialog>
      </div>
      <div>
        <ShadowDropbox
          cards={cards}
          template={(card: any) =>
            card?.title == "card 1" ? (
              <a>shubham</a>
            ) : (
              <a>{card?.title} omega </a>
            )
          }
        ></ShadowDropbox>
      </div>
      <div>
        <ShadowDropdown
          group={false}
          showClear={true}
          options={dropdownoptions}
          label="Default"
        />
      </div>
     
    </div>
  );
}

export default App;
