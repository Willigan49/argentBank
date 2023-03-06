import argentBankLogo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Root() {
  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div className="main-nav-link">
        <a class="main-nav-item" href="./sign-in.html">
          <FontAwesomeIcon class="user-icon" icon={solid("user-circle")} />
          Sign In
        </a>
      </div>
    </nav>
  );
}
