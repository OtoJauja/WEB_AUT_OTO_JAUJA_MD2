import SelectPage from "../pageObjects/SelectPage";

describe('Select grid', () => {
  beforeEach(() => {
    SelectPage.visit();
  });

  it('Clicks and validates if highlited or not', () => {
    // izveido masivu ar pogām kuras nospiedīs
    const selected = ['Two', 'Four', 'Six', 'Eight'];
    const unselected = ['One', 'Three', 'Five', 'Seven', 'Nine'];

    // pasauc metodi kas aizved uz grid
    SelectPage.selectGrid.click();
    
    // pasauc metodi kas nospiež katru vajadzīgo pogu
    SelectPage.selectNumber(selected);

    // pasauc metodi kas validē kas ir highlited
    SelectPage.validateSelected(selected);

    // pasauc metodi kas validē kas nav highlited
    SelectPage.validateUnselected(unselected);
  });
});