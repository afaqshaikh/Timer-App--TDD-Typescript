import PropTypes from 'prop-types';
import './Timer.css'


type TimerButtonProps = {
  buttonAction: () => void;
  buttonValue: string;
};

const TimerButton = ({ buttonAction, buttonValue }: TimerButtonProps) => (
  <div className="button-container d-grid col-4">
    <button className=" button btn btn-primary btn-lg" onClick={buttonAction}>{buttonValue}</button>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;