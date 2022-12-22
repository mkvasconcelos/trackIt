import styled from "styled-components";

export const Main = styled.div`
  padding: 70px 18px 100px 18px;
  height: fit-content;
  background: #e5e5e5;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
  position: relative;
  section {
    font-size: 18px;
    color: #666666;
  }
`;

export const ContainerLogSig = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  position: relative;
  form {
    display: flex;
    flex-direction: column;
    margin: 10% 10% 5% 10%;
    width: 80%;
  }
  p {
    color: #52b6ff;
    text-decoration: underline;
    font-size: 14px;
  }
  button {
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 5px;
    border: none;
    width: 30px;
    height: 30px;
    background: #52b6ff;
    color: #ffffff;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }
`;

export const CalendarContainer = styled.main`
  .react-calendar {
    background: #ffffff;
    border: none;
    font-family: "Lexend Deca", Arial, Helvetica, sans-serif;
  }
  .react-calendar--doubleView {
    width: 1000px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .wrong {
    background-color: red;
  }

  .right {
    background-color: green;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: #ffffff;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #126ba5;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    /* background: #ffffff; */
    text-align: center;
    line-height: 16px;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--now {
    background: #ffff76;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;
