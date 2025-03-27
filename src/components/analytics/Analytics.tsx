import GoogleAnalytics from "./GoogleAnalytics";
import MicrosoftClarity from "./MicrosoftClarity";

export default function Analytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";

  return (
    <>
      {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
      {CLARITY_ID && <MicrosoftClarity clarityId={CLARITY_ID} />}
    </>
  );
} 