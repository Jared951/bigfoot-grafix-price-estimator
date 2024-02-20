document.addEventListener("DOMContentLoaded", function () {
    apparelOptions();
});

function apparelOptions() {
    const apparelTypeSelection = document.getElementsByName("apparelTypeSelection")[0];
    const apparelMaterialSelection = document.getElementById("apparelMaterialSelection");
    
    const selectedApparelType = apparelTypeSelection.value;

    apparelMaterialSelection.innerHTML = "<option value='non'>Select</option>";

    if (selectedApparelType === "tShirt") {
        addApparelOption(apparelMaterialSelection, "hanes_5280_adult_essential_short_sleeve_tshirt", "Hanes 5280 Adult Essential Short T-Shirt: $2.07");
        addApparelOption(apparelMaterialSelection, "gildan_g500_adult_heavy_cotton_tshirt", "Gildan G500 Adult Heavy Cotton T-Shirt: $2.52");
        addApparelOption(apparelMaterialSelection, "comfort_colors_c1717_adult_heavyweight_tshirt", "Comfort Colors C1717 Adult Heavyweight T-Shirt: $6.62");
    } else if (selectedApparelType === "longsleeveShirt") {
        addApparelOption(apparelMaterialSelection, "comfort_colors_C6014_adult_heavyweight_rs_longsleeve", "Comfort Colors C6014 Adult Heavyweight Longsleeve Shirt: $13.91");
        addApparelOption(apparelMaterialSelection, "gildan_g840_adult_50/50_longsleeve", "Gildan G840 Adult 50/50 Longsleeve Shirt: $5.56");
        addApparelOption(apparelMaterialSelection, "gildan_g540_adult_heavy_cotton_longsleeve", "Gildan G540 Adult Heavy Cotton Longsleeve Shirt: $4.23");
    } else if (selectedApparelType === "pullOverHoodie") {
        addApparelOption(apparelMaterialSelection, "gildan_g185_adult_heavy_blend_pullover_hoodie", "Gildan g185 Adult Heavy Blend Pull Over Hoodie: $10.94");
        addApparelOption(apparelMaterialSelection, "champion_s700_adult_pullover_hoodie", "Champion S700 Adult Pullover Hoodie: $13.85");
        addApparelOption(apparelMaterialSelection, "hanes_f170_ultimate_cotton_pullover_hoodie", "Hanes F170 Ultimate Cotton Pullover Hoodie: $18.64");
    } else if (selectedApparelType === "fullZipHoodie") {
        addApparelOption(apparelMaterialSelection, "champion_s800_fullzip_hoodie", "Champion S800 Fullzip Hoodie: $18.66");
        addApparelOption(apparelMaterialSelection, "port_and_company_pc850zh_fullzip_hoodie", "Port & Company PC850ZH Fullzip Hoodie: $19.15");
        addApparelOption(apparelMaterialSelection, "bella_and_canvas_3739_fullzip_hoodie", "Bella + Canvas 3739 Fullzip Hoodie: $22.65");
    } else if (selectedApparelType === "crewneck") {
        addApparelOption(apparelMaterialSelection, "jerzees_562_adult_nublend_crewneck", "Jerzees 562 Adult Nublend Crewneck: $6.57");
        addApparelOption(apparelMaterialSelection, "gildan_g180_adult_heavy_blend_crewneck", "Gildan G180 Adult Heavy Blend Crewneck: $6.40");
        addApparelOption(apparelMaterialSelection, "hanes_p1607_ecosmart_crewneck", "Hanes P1607 Ecosmart Crewneck: $4.71");
    } else if (selectedApparelType === "polo") {
        addApparelOption(apparelMaterialSelection, "hanes_054_ecosmart_polo", "Hanes 054 Ecosmart Polo: $3.81");
        addApparelOption(apparelMaterialSelection, "gildan_g880_dryblend_polo", "Gildan G880 Dryblend Polo: $7.55");
        addApparelOption(apparelMaterialSelection, "sport_tek_st550_posicharge_polo", "Sport Tek ST550 PosiCharge Polo: $10.38");
    } else if (selectedApparelType === "baseballHat") {
        addApparelOption(apparelMaterialSelection, "port_and_company_cp80_six_panel_twill_cap", "Port & Company CP80 Six-Panel Twill Cap: $4.30");
        addApparelOption(apparelMaterialSelection, "sport_tek_stc39_retro_trucker_cap", "Sport Tek STC39 Retro Trucker Cap: $6.86");
    }
};

function addApparelOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
};
