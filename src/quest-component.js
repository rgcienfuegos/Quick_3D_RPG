import {entity} from "./entity.js";


export const quest_component = (() => {

  const _TITLE = 'Hola Aventurero!';
  const _TEXT = `Bienvenido al mundo del Creepypasto! Desde la desaparición de hardware y software no han parado de proliferar los bichos en las tierras del Creepypasto y no voy a poder ir a pasar la navidad con mis allegados, ¿ Sería tan amable de eliminar todos los que pueda?`;

  class QuestComponent extends entity.Component {
    constructor() {
      super();

      const e = document.getElementById('quest-ui');
      e.style.visibility = 'hidden';
    }

    InitComponent() {
      this._RegisterHandler('input.picked', (m) => this._OnPicked(m));
    }

    _OnPicked(msg) {
      // HARDCODE A QUEST
      const quest = {
        id: 'foo',
        title: _TITLE,
        text: _TEXT,
      };
      this._AddQuestToJournal(quest);
    }

    _AddQuestToJournal(quest) {
      const ui = this.FindEntity('ui').GetComponent('UIController');
      ui.AddQuest(quest);
    }
  };

  return {
      QuestComponent: QuestComponent,
  };
})();
