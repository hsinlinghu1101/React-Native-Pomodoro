import React, { Component } from "react";
export const TimeContext = React.createContext({
    sessionTime:25,
    breakTime:5,
    timerMinute:25,
    isPlay:false,
    increaseSession:()=>{},
    decreaseSession:()=>{},
    increaseBreak:()=>{},
    decreaseBreak:()=>{},
    finalIncreaseSession:()=>{},
    finalDecreaseSession:()=>{}
});

export default TimeContext

export class TimeProvider extends Component{
    constructor(props) {
        super(props)
        const state = { sessionTime: 25, breakTime: 5, timerMinute: 25, isPlay:false }
    
        this.state = state;
      }
    increaseSession = () => {
        this.setState({sessionTime: this.state.sessionTime + 1});
        
      };
    
       decreaseSession = () => {
        this.setState({sessionTime:this.state.sessionTime - 1});
        
      };
    
       increaseBreak = () => {
        this.setState({breakTime: this.state.breakTime + 1});
      };
    
      decreaseBreak = () => {
        this.setState({breakTime: this.state.breakTime - 1});
      };
       onUpdateTimeMinute = () => {
        this.setState({timerMinute: this.state.timerMinute - 1});
        this.setState({isPlay: true});
      };
    
       onToggleInterval = (isSession) => {
        if (isSession) {
            this.setState({timerMinute:this.state.sessionTime});
        } else {
            this.setState({timerMinute:this.state.breakTime});
        }
      };
    
       onResetSession = () => {
        this.setState({timerMinute:this.state.sessionTime});
      };
       finalIncreaseSession = () => {
        this.setState({timerMinute:this.state.sessionTime +1 });
      };
      finalDecreaseSession = () => {
        this.setState({timerMinute:this.state.sessionTime -1 });
      };
      onPlayStopTimer = (isPlayVar) => {
        this.setState({isPlay: isPlayVar});
      };
    render() {
        const value = {
          sessionTime: this.state.sessionTime,
          breakTime: this.state.breakTime,
          timerMinute: this.state.timerMinute,
          isPlay:this.state.isPlay,
          increaseSession:this.increaseSession,
          decreaseSession: this.decreaseSession,
          increaseBreak:this.increaseBreak,
          decreaseBreak: this.decreaseBreak,
          onUpdateTimeMinute: this.onUpdateTimeMinute,
          onToggleInterval: this.onToggleInterval,
          onResetSession:this.onResetSession,
          onPlayStopTimer:this.onPlayStopTimer,
          finalIncreaseSession:this.finalIncreaseSession,
          finalDecreaseSession: this.finalDecreaseSession
        }


  return (
    <TimeContext.Provider value={value}>
      {this.props.children}
    </TimeContext.Provider>
  );
};
}