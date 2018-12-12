import './Page7.css';

export const Page7 = props => {
  setTimeout(() => {
    props.history.push('/page8');
  }, 5000)
  return null;
}
