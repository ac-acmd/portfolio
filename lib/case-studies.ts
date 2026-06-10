export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  tags: string[];
  content: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "force-board-ble-connection-time-optimization",
    title: "Force Board's BLE Connection Time Optimization",
    client: "PitchSix",
    summary:
      "App's BLE connection time reduced from 13 seconds to 3 seconds",
    tags: ["performance", "optimization", "user experience"],
    content: `
      # Case Study: PitchSix / Force Board

      **Client:** PitchSix  
      **Platform:** Android (Bluetooth Low Energy)

      ---

      Force Board is a smart, weight-free strength training platform for rock climbers and other athletes to train fingers and major muscle groups. PitchSix was preparing to launch the app when they discovered a 13-second BLE connection time during pre-launch testing. The previous team had told the client it was a hardware limitation and that nothing could be done. I was brought in to review the issue before launch.

      I traced the connection flow and found a hardcoded 10-second \`postDelayed\` before scan initiation. I spent most of the hour not believing it was that simple, testing to see what would break if I reduced the delay. To my surprise, nothing broke. I reduced the delay, and the connection time went from 13 seconds to 5 seconds. We shipped the fix before users ever saw the slow version. PitchSix was excited about the improvement, and we kept working together off-and-on for years.
      
      Now I'm on retainer with them.

      This case study illustrates that sometimes you just need a fresh pair of eyes to find simple solutions to complex problems.
      `,
  }
];