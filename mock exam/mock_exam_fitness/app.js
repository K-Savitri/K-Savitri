const form = document.getElementById('activity-form');

form.addEventListener('submit', handleForm)



function handleForm(){
    event.preventDefault()
    const cyc = document.querySelector('.cyc').value;
    const run = document.querySelector('.run').value;
    const rea = document.querySelector('.rea').value;
    const activities = [
        { type: 'Cycling', duration: cyc },
        { type: 'Running', duration: run },
        { type: 'Reading', duration: rea }
      ];
    // console.log(cycle)
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
        form.reset();
      });
      console.log(activities)
    
    



const addActivityToList = (activity) => {
    const li = document.createElement('li');
    li.textContent = `${activity.type} - ${activity.duration} minutes on ${new Date(activity.date).toLocaleDateString()}`;
    activityList.appendChild(li);
  };


    const loadActivities = async () => {
      try {
        const response = await fetch('http://localhost:5000/activities');
        const activities = await response.json();
        activities.forEach(addActivityToList);
      } catch (err) {
        console.error(err);
      }
    };


        const loadSummary = async () => {
      try {
        const response = await fetch('http://localhost:5000/activities/summary');
        const summary = await response.json();
        displaySummary(summary);
      } catch (err) {
        console.error(err);
      }
    };

    const displaySummary = (summary) => {
              summaryContainer.innerHTML = '<h3>Summary of Activities</h3>';
              summary.forEach(item => {
                const div = document.createElement('div');
                div.textContent = `${item._id}: ${item.totalDuration} minutes over ${item.count} activities`;
                summaryContainer.appendChild(div);
              });
            };

            loadActivities();
                loadSummary();


            }

  