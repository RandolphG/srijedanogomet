import React, { useEffect } from "react";
import { StandingsViewModel } from "./standingsViewModel";
import "./styles/_standingsStyles.scss";

/**
 * Standings
 * @description Renders the standings table
 */
const Standings = () => {
  const { competitions } = StandingsViewModel();

  useEffect(() => {
    const competitionTableUrl = (phaseId: string, langId: string) =>
      `https://sportapi.widgets.sports.gracenote.com/football/gettable/phaseid/${phaseId}/languagecode/${langId}.json?c=115&module=football&type=standing`;
    const compFlag = (code: string) =>
      `https://alexsobolenko.github.io/flag-icons/flags/4x3/${code}.svg`;
    const teamLogo = (id: string) =>
      `//images.sports.gracenote.com/images/lib/basic/sport/football/club/logo/small/${id}.png`;
    const compLogo = (id: string) =>
      `//images.sports.gracenote.com/images/lib/basic/sport/football/competition/logo/small/${id}.png`;

    const compSelectEl: any = document.querySelector(".comp-select");
    const compNameEl: any = document.querySelector(".comp-name");
    const compFlagEl: any = document.querySelector(".comp-flag");
    const compLoadingEl: any = document.querySelector(".comp-loading");
    const compTableBodyEl: any = document.querySelector(".comp-table-body");

    loadTableData(competitions[0]).then((r) => console.log(r));

    competitions.forEach((comp: any, index) => {
      const compBtnEl: any = document.createElement("div");
      compBtnEl.classList.add("comp");
      const compRadioEl: any = document.createElement("input");
      compRadioEl.type = "radio";
      compRadioEl.name = "comp";
      compRadioEl.id = comp.compId;
      compRadioEl.checked = index == 0;
      const compLabelEl = document.createElement("label");
      compLabelEl.setAttribute("for", comp.compId);
      const compImgEl = document.createElement("img");
      compImgEl.src = compLogo(comp.compId);
      compLabelEl.append(compImgEl);
      compBtnEl.append(compRadioEl, compLabelEl);
      compLabelEl.addEventListener("click", () => {
        loadTableData(comp).then();
      });
      compSelectEl.append(compBtnEl);
    });

    async function loadTableData(comp: any) {
      compLoading(true);
      compTableBodyEl.innerHTML = "";
      compNameEl.innerText = comp.name;
      compFlagEl.src = compFlag(comp.country);
      const response = await fetch(
        competitionTableUrl(comp.phaseId, comp.langId)
      );
      const data = await response.json();
      data.forEach((team: any) => {
        compTableBodyEl.append(createTeamTableRow(team));
      });
      compLoading(false);
    }

    function createTeamTableRow(team: any) {
      const tableRowEl = document.createElement("tr");
      tableRowEl.classList.add("comp-table-team-row");
      tableRowEl.innerHTML = `
        <td class="rank">${team.c_Rank}</td>
        <td class="team">
            <img src="${teamLogo(team.n_TeamID)}" title=${team.c_Team}" alt="${
        team.c_Team
      }">
            <span class="name-full">${team.c_Team}</span>
            <span class="name-short">${team.c_TeamShort}</span>
        </td>
        <td class="played">${team.n_Matches}</td>
        <td class="won">${team.n_MatchesWon}</td>
        <td class="drawn">${team.n_MatchesDrawn}</td>
        <td class="lost">${team.n_MatchesLost}</td>
        <td class="for">${team.n_GoalsFor}</td>
        <td class="against">${team.n_GoalsAgainst}</td>
        <td class="difference">${team.n_GoalsFor - team.n_GoalsAgainst}</td>
        <td class="points">${team.n_Points}</td>`;
      return tableRowEl;
    }

    function compLoading(load: any) {
      load
        ? compLoadingEl.classList.add("load")
        : compLoadingEl.classList.remove("load");
    }
  }, []);

  return (
    <div className="standings">
      <div className="standingsContainer">
        <div className="comp-select" />
        <div className="comp-title">
          <img alt="flag" src="" className="comp-flag" />
          <h1 className="comp-name" />
        </div>
        <div className="comp-table-container">
          <table className="comp-table">
            <thead>
              <tr className="comp-table-header">
                <th className="rank">#</th>
                <th className="team">Team</th>
                <th className="played">P</th>
                <th className="won">W</th>
                <th className="drawn">D</th>
                <th className="lost">L</th>
                <th className="for">+</th>
                <th className="against">-</th>
                <th className="difference">+/-</th>
                <th className="points">P</th>
              </tr>
            </thead>
            <tbody className="comp-table-body" />
          </table>
        </div>
        <div className="comp-loading">
          loading... <br />
          <img src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Standings;
