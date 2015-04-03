
function BuildHotkeyModel() {
    var self = this;

    self.SpecIdToGridMap = ko.observable(
        {
			"/pa/units/land/land_scout/land_scout.json": ["lowtier", 1],
			"/pa/units/land/assault_bot/assault_bot.json": ["lowtier", 2],
			"/pa/units/land/bot_bomb/bot_bomb.json": ["lowtier", 3],
			"/pa/units/land/bot_grenadier/bot_grenadier.json": ["lowtier", 4],
			"/pa/units/land/tank_armor/tank_armor.json": ["lowtier", 5],
			"/pa/units/land/tank_light_laser/tank_light_laser.json": ["lowtier", 6],
		
		
			"/pa/units/land/assault_bot_adv/assault_bot_adv.json": ["hightier", 1],
			"/pa/units/land/bot_sniper/bot_sniper.json": ["hightier", 2],
			"/pa/units/land/tank_heavy_armor/tank_heavy_armor.json": ["hightier", 3],
			"/pa/units/land/tank_laser_adv/tank_laser_adv.json": ["hightier", 4],
			
			
			"/pa/units/land/land_barrier/land_barrier.json": ["castle", 1],
			"/pa/units/land/laser_defense_single/laser_defense_single.json": ["castle", 2],
			"/pa/units/land/laser_defense/laser_defense.json": ["castle", 3],
			"/pa/units/land/laser_defense_adv/laser_defense_adv.json": ["castle", 4],
			"/pa/units/land/artillery_long/artillery_long.json": ["castle", 6],
			"/pa/units/land/artillery_short/artillery_short.json": ["castle", 5],
			"/pa/units/air/fabrication_aircraft/fabrication_aircraft.json": ["castle", 10],
			"/pa/units/land/bot_factory/bot_factory.json": ["castle", 11],
			"/pa/units/land/vehicle_factory/vehicle_factory.json": ["castle", 12],
			"/pa/units/land/metal_extractor/metal_extractor.json": ["castle", 13],
			"/pa/units/land/metal_extractor_adv/metal_extractor_adv.json": ["castle", 14],
			"/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json": ["castle", 7]
        }
    );
};
