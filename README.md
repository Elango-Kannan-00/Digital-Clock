# 🕒 Digital Clock App
  - A simple yet elegant digital clock built with React. It displays the current time in HH:MM:SS format and updates every second using React hooks.

# 🧠 How It Works
- The app uses useState to store the current time.
- useEffect sets up a setInterval that updates the time every second.
- The time is formatted to always show two digits (e.g., 09:05:03).
- The component re-renders every second to reflect the updated time.
```
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);
```
- This ensures:
  - ✅ One timer is created when the component mounts.
  - 🧹 Timer is cleaned up when the component unmounts.
