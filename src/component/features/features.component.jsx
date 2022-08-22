import { ReactComponent as TodoLogo } from "../../assets/images/icon-todo.svg";
import { ReactComponent as CalendarLogo } from "../../assets/images/icon-calendar.svg";
import { ReactComponent as ReminderLogo } from "../../assets/images/icon-reminders.svg";
import { ReactComponent as PlanningLogo } from "../../assets/images/icon-planning.svg";

import "./features.styles.css";

const Features = () => {
  return (
    <div className="features-container">
      <div>
        <TodoLogo className="features-logo" />
        <span>Todo List</span>
      </div>
      <div>
        <CalendarLogo className="features-logo" />
        <span>Calendar</span>
      </div>
      <div>
        <ReminderLogo className="features-logo" />
        <span>Reminder</span>
      </div>
      <div>
        <PlanningLogo className="features-logo" />
        <span>Planning</span>
      </div>
    </div>
  );
};

export default Features;
