document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('activity-form');
    const activityList = document.getElementById('activity-list');
    const summaryContainer = document.getElementById('summary');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const cyc = document.querySelector('.cyc').value;
      const run = document.querySelector('.run').value;
      const rea = document.querySelector('.rea').value;
  
      const activities = [
        { type: 'Cycling', duration: cyc },
        { type: 'Running', duration: run },
        { type: 'Reading', duration: rea }
      ];
  
      activities.forEach(async activity => {
        if (activity.duration) {
          try {
            const response = await fetch('http://localhost:5000/activities', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ type: activity.type, duration: activity.duration, date: new Date() }),
            });
            const newActivity = await response.json();
            addActivityToList(newActivity);
          } catch (err) {
            console.error(err);
          }
        }
      });
  
      form.reset();
      loadSummary();
    });


  
    const addActivityToList = (activity) => {
      const li = document.createElement('li');
      li.textContent = `${activity.type} - ${activity.duration} minutes on ${new Date(activity.date).toLocaleDateString()}`;
      activityList.appendChild(li);
    };
  
//     const loadActivities = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/activities');
//         const activities = await response.json();
//         activities.forEach(addActivityToList);
//       } catch (err) {
//         console.error(err);
//       }
//     };
        
//     const loadSummary = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/activities/summary');
//         const summary = await response.json();
//         displaySummary(summary);
//       } catch (err) {
//         console.error(err);
//       }
//     };
  
//     const displaySummary = (summary) => {
//       summaryContainer.innerHTML = '<h3>Summary of Activities</h3>';
//       summary.forEach(item => {
//         const div = document.createElement('div');
//         div.textContent = `${item._id}: ${item.totalDuration} minutes over ${item.count} activities`;
//         summaryContainer.appendChild(div);
//       });
//     };
  
//     loadActivities();
//     loadSummary();
//   });
  

//   const loadChart = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/activities');
//       const activities = await response.json();
//       drawChart(activities);
//     } catch (err) {
//       console.error(err);
//     }
//   };
  
//   const drawChart = (activities) => {
//     const data = activities.map(activity => ({
//       date: new Date(activity.date),
//       duration: activity.duration,
//       type: activity.type,
//     }));
  
//     const svg = d3.select("#chart").append("svg")
//       .attr("width", 600)
//       .attr("height", 400);
  
//     // Add your D3 charting code here based on your requirements
//   };
  
//   loadChart();
  