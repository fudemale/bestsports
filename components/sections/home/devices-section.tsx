import React from "react"
import { Tv } from "lucide-react"

const AndroidIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M17.523 15.341l2.286-3.967a.592.592 0 00-.215-.805.587.587 0 00-.802.212l-2.313 4.012C15.335 14.251 13.736 14 12 14c-1.736 0-3.335.251-4.48.793L5.208 10.78a.589.589 0 00-.802-.212.592.592 0 00-.215.805l2.286 3.967C3.766 16.997 2 19.827 2 23h20c0-3.173-1.766-6.003-4.477-7.659zM7.5 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
  </svg>
)

const AppleIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M17.05 19.096c-.545.82-1.238 1.873-2.227 1.873-.967 0-1.263-.57-2.615-.57-1.328 0-1.75.595-2.616.595-.99 0-1.741-1.14-2.368-2.02-1.31-1.826-2.328-5.158-.974-7.509 0 0 .667-1.268 2.583-1.268 1.292 0 2.168.873 2.826.873.683 0 1.807-1.057 3.248-1.057.552 0 2.508.049 3.66 1.738-.092.058-2.162 1.268-2.13 3.802.033 3.03 2.666 4.062 2.683 4.07-.017.058-.412 1.412-1.367 2.796l-.7.966zM12.492 5.734c.692-.841 1.163-2.021 1.033-3.188-1.008.04-2.225.675-2.95 1.516-.65.733-1.208 1.925-1.066 3.05 1.125.091 2.275-.559 2.983-1.378z" />
  </svg>
)

const WindowsIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M2 2l9 1.5v8L2 11V2zm11 1.5L22 2v9.5l-9-.5V3.5zm9 10l-9 .5V22l9-1.5V14zm-11 .5L2 13.5V22l9-1.5V14z" />
  </svg>
)

const FirestickIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M15.52 14.99a4.96 4.96 0 01-2.59 4.37c-2.69 1.4-6.06.36-7.46-2.33a5.008 5.008 0 011.33-6.51c.43-.29.88-.52 1.36-.7.46-.16.91-.25 1.39-.26.74 0 1.44.22 2.04.61.29.19.55.43.77.71.22.27.39.58.51.91.12.33.18.69.18 1.06 0 .37-.06.73-.18 1.07-.12.33-.3.64-.51.91-.22.27-.48.52-.77.71-.6.39-1.3.6-2.04.61-.47 0-.93-.09-1.39-.26-.47-.18-.92-.41-1.36-.7-.42-.29-.81-.64-.81-1.36-.2-.49-.3-.1-.3-.52 0-.53.11-1.04.3-1.52.2-.49.47-.95.81-1.36.34-.41.72-.75 1.14-1.04.43-.29.89-.52 1.36-.7.46-.16.92-.25 1.39-.26.99 0 1.94.3 2.73.82 1.81 1.19 2.51 3.54 1.62 5.49-.17.37-.4.71-.68 1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
)

const devices = [
  { name: "Android", icon: AndroidIcon },
  { name: "Apple", icon: AppleIcon },
  { name: "Windows", icon: WindowsIcon },
  { name: "Smart TV", icon: Tv },
  { name: "FireStick", icon: FirestickIcon },
  { name: "Mag", icon: Tv },
]

export function DevicesSection() {
  return (
    <section id="devices" className="py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Available on All Your Devices</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          {devices.map((device) => (
            <div key={device.name} className="flex flex-col items-center gap-2 text-foreground">
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center border border-border">
                {React.createElement(device.icon, { className: "h-8 w-8 text-foreground" })}
              </div>
              <span className="text-sm font-medium">{device.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
