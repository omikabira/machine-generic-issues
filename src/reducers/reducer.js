

const iState = {
    issues: [
        {
          id: "M1",
          date: "20/05/2020",
          time: "12am",
          ObsBy: "Omi",
          description: "Leakage",
          priority: "medium",
          shift: 1,
          issueOwner: "Shubham",
          currentStatus: "No Electricity",
          resolution: "Start Generator"
        },
        {
          id: "M2",
          date: "15/03/2020",
          time: "10am",
          ObsBy: "Neha",
          description: "Shortage",
          priority: "high",
          shift: 1,
          issueOwner: "Deepak",
          currentStatus: "Machine Stopped",
          resolution: "Increase Inventory"
        },
        {
          id: "M3",
          date: "14/05/2020",
          time: "09am",
          ObsBy: "Jatin",
          description: "Shortage",
          priority: "low",
          shift: 1,
          issueOwner: "Pankaj",
          currentStatus: "Machine Stopped",
          resolution: "Increase Inventory"
        },
        {
          id: "M4",
          date: "25/10/2020",
          time: "11am",
          ObsBy: "Rahul",
          description: "Shortage",
          priority: "low",
          shift: 1,
          issueOwner: "Karan",
          currentStatus: "Machine Stopped",
          resolution: "Increase Inventory"
        }
      ]
}


const reducer = (state = iState,action) => {

    return state;
}

export default reducer;