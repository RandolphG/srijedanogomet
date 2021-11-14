import React, { Fragment } from "react";
import "./styles/_teamLineUpStyles.scss";
import { TeamLineUpViewModel } from "./teamLineUpViewModel";

/**
 * @description TeamLineUp component
 */
const TeamLineUp = () => {
  const { teamHome } = TeamLineUpViewModel();

  const AwayTeam = () => (
    <div className="formation formation--away">
      <div className="formation__line mt-2">
        <div className="teamPlayer">
          <div className="teamPlayer__number">10</div>
          <span className="teamPlayer__name">Mane</span>
        </div>
        <div className="teamPlayer">
          <div className="teamPlayer__number">9</div>
          <span className="teamPlayer__name">Firmino</span>
        </div>
        <div className="teamPlayer">
          <div className="teamPlayer__number">11</div>
          <span className="teamPlayer__name">Salah</span>
        </div>
      </div>
      <div className="formation__line">
        <div className="teamPlayer">
          <div className="teamPlayer__number">5</div>
          <span className="teamPlayer__name">Wijnaldum</span>
        </div>
        <div className="teamPlayer">
          <div className="teamPlayer__number">3</div>
          <span className="teamPlayer__name">Fabinho</span>
        </div>
        <div className="teamPlayer">
          <div className="teamPlayer__number">15</div>
          <span className="teamPlayer__name">Oxlade-Chamberlain</span>
        </div>
      </div>
      <div className="formation__line">
        <div className="teamPlayer">
          <div className="teamPlayer__number">26</div>
          <span className="teamPlayer__name">Robertson</span>
        </div>
        <div className="teamPlayer">
          <div className="teamPlayer__number">4</div>
          <span className="teamPlayer__name">van Dijk</span>
        </div>
        <div className="teamPlayer">
          <div className="teamPlayer__number">12</div>
          <span className="teamPlayer__name">Gomez</span>
        </div>
        <div className="teamPlayer">
          <div className="teamPlayer__number">66</div>
          <span className="teamPlayer__name">Alexander-Arnold</span>
        </div>
      </div>
      <div className="formation__line mb-0">
        <div className="teamPlayer">
          <div className="teamPlayer__number">1</div>
          <span className="teamPlayer__name">Alisson</span>
        </div>
      </div>
    </div>
  );

  const HomeTeam = () => (
    <div className="formation formation--home">
      <div className="formation formation--home">
        <div className="formation__line">
          <div className="teamPlayer">
            <div className="teamPlayer__number">1</div>
            <span className="teamPlayer__name">de Gea</span>
          </div>
        </div>
        <div className="formation__line">
          <div className="teamPlayer">
            <div className="teamPlayer__number">29</div>
            <span className="teamPlayer__name">Wan-Bissaka</span>
          </div>
          <div className="teamPlayer">
            <div className="teamPlayer__number">2</div>
            <span className="teamPlayer__name">Lindelof</span>
          </div>
          <div className="teamPlayer">
            <div className="teamPlayer__number">5</div>
            <span className="teamPlayer__name">Maguire</span>
          </div>
          <div className="teamPlayer">
            <div className="teamPlayer__number">24</div>
            <span className="teamPlayer__name">Fosu-Mensah</span>
          </div>
        </div>
        <div className="formation__line">
          <div className="teamPlayer">
            <div className="teamPlayer__number">39</div>
            <span className="teamPlayer__name">McTominay</span>
          </div>
          <div className="teamPlayer">
            <div className="teamPlayer__number">6</div>
            <span className="teamPlayer__name">Pogba</span>
          </div>
        </div>
        <div className="formation__line">
          <div className="teamPlayer">
            <div className="teamPlayer__number">26</div>
            <span className="teamPlayer__name">Greenwood</span>
          </div>
          <div className="teamPlayer">
            <div className="teamPlayer__number">18</div>
            <span className="teamPlayer__name">Fernandes</span>
          </div>
          <div className="teamPlayer">
            <div className="teamPlayer__number">10</div>
            <span className="teamPlayer__name">Rashford</span>
          </div>
        </div>
        <div className="formation__line">
          <div className="teamPlayer">
            <div className="teamPlayer__number">9</div>
            <span className="teamPlayer__name">Martial</span>
          </div>
        </div>
      </div>
    </div>
  );

  const HomeTeamInfo = () => (
    <div className="scoreboard__team scoreboard__team--align-right mr-2">
      <div className="scoreboard__badge ml-1">
        <img
          src="https://seeklogo.net/wp-content/uploads/2012/12/manchester-united-logo-vector-400x400.png"
          alt="Manchester United"
        />
      </div>
      <span className="scoreboard__name">Manchester United</span>
    </div>
  );

  const AwayTeamInfo = () => (
    <div className="scoreboard__team scoreboard__team--align-left ml-2">
      <div className="scoreboard__badge mr-1">
        <img
          src="https://seeklogo.net/wp-content/uploads/2011/08/liverpool-logo-vector.png"
          alt="Liverpool"
        />
      </div>
      <span className="scoreboard__name">Liverpool</span>
    </div>
  );

  const GameResults = () => (
    <div className="scoreboard__result">
      <span className="scoreboard__result-home">3</span>
      <span className="scoreboard__result-separator">:</span>
      <span className="scoreboard__result-home">2</span>
    </div>
  );

  const ScoreBoardNav = () => (
    <ul className="scoreboard__nav">
      <li className="scoreboard__nav-el">
        <a href="#">Live</a>
      </li>
      <li className="scoreboard__nav-el is-active">
        <a href="">Line-up</a>
      </li>
      <li className="scoreboard__nav-el">
        <a href="">Statistics</a>
      </li>
      <li className="scoreboard__nav-el">
        <a href="">Comments</a>
      </li>
    </ul>
  );

  const HomeCorners = () => (
    <Fragment>
      <div className="field__corner field__corner--right" />
      <div className="field__corner field__corner--left" />
    </Fragment>
  );

  const AwayCorners = () => (
    <Fragment>
      <div className="field__corner field__corner--right" />
      <div className="field__corner field__corner--left" />
    </Fragment>
  );

  const HomeFormation = ({ children }: any) => (
    <div className="formation formation--home">{children}</div>
  );

  const HomePenaltyBox = () => (
    <div className="penalty-box">
      <div className="penalty-box__container">
        <div className="penalty-box__infield" />
        <div className="penalty-box__circle" />
      </div>
    </div>
  );

  const AwayPenaltyBox = () => (
    <div className="penalty-box">
      <div className="penalty-box__container">
        <div className="penalty-box__infield" />
        <div className="penalty-box__circle" />
      </div>
    </div>
  );

  const TeamScoreBoard = ({ children }: any) => (
    <div className="scoreboard__teams">{children}</div>
  );

  const HomeField = ({ children }: any) => (
    <div className="field__half">{children}</div>
  );

  const AwayField = ({ children }: any) => (
    <div className="field__half field__half--reverse">{children}</div>
  );

  const CenterFieldLine = () => <div className="field__center-line" />;

  const FieldContainer = ({ children }: any) => (
    <div className="field__container">{children}</div>
  );

  const Field = ({ children }: any) => <div className="field">{children}</div>;

  const GameTime = () => (
    <div className="scoreboard__basics mb-05">
      <span className="label">Second half</span>
      <span className="text-danger">56'</span>
    </div>
  );

  const ScoreBoard = ({ children }: any) => (
    <div className="scoreboard">{children}</div>
  );

  const ScoreBoardContainer = ({ children }: any) => (
    <div className="scoreboard__container">{children}</div>
  );

  return (
    <div>
      <ScoreBoard>
        <ScoreBoardContainer>
          <GameTime />
          <TeamScoreBoard>
            <HomeTeamInfo />
            <GameResults />
            <AwayTeamInfo />
          </TeamScoreBoard>
        </ScoreBoardContainer>
        <ScoreBoardNav />
      </ScoreBoard>
      <Field>
        <FieldContainer>
          <HomeField>
            <HomePenaltyBox />
            <HomeCorners />
            <HomeFormation>
              <HomeTeam />
            </HomeFormation>
          </HomeField>
          <CenterFieldLine />
          <AwayField>
            <AwayTeam />
            <AwayPenaltyBox />
            <AwayCorners />
          </AwayField>
        </FieldContainer>
      </Field>
    </div>
  );
};

export default TeamLineUp;
