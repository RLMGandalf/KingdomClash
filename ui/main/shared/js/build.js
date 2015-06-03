
function BuildHotkeyModel() {
    var self = this;

    self.SpecIdToGridMap = ko.observable(
        {
			"/pa/units/land/lt_1/lt_1.json": ["lowtier", 0],
			"/pa/units/land/lt_2/lt_2.json": ["lowtier", 1],
			"/pa/units/land/lt_3/lt_3.json": ["lowtier", 2],
			"/pa/units/land/lt_4/lt_4.json": ["lowtier", 3],
			"/pa/units/land/lt_5/lt_5.json": ["lowtier", 4],
			"/pa/units/land/lt_6/lt_6.json": ["lowtier", 5],
			"/pa/units/land/lt_7/lt_7.json": ["lowtier", 6],
			"/pa/units/land/lt_8/lt_8.json": ["lowtier", 7],
			"/pa/units/land/lt_9/lt_9.json": ["lowtier", 8],
			"/pa/units/land/lt_10/lt_10.json": ["lowtier", 9],
			"/pa/units/land/lt_11/lt_11.json": ["lowtier", 10],
			"/pa/units/land/lt_12/lt_12.json": ["lowtier", 11],
			"/pa/units/land/lt_13/lt_13.json": ["lowtier", 12],
			"/pa/units/land/lt_14/lt_14.json": ["lowtier", 13],
			"/pa/units/land/lt_15/lt_15.json": ["lowtier", 14],
		
		
			"/pa/units/land/ht_1/ht_1.json": ["hightier", 0],
			"/pa/units/land/ht_2/ht_2.json": ["hightier", 1],
			"/pa/units/land/ht_3/ht_3.json": ["hightier", 2],
			"/pa/units/land/ht_4/ht_4.json": ["hightier", 3],
			"/pa/units/land/ht_5/ht_5.json": ["hightier", 4],
			"/pa/units/land/ht_6/ht_6.json": ["hightier", 5],
			"/pa/units/land/ht_7/ht_7.json": ["hightier", 6],
			"/pa/units/land/ht_8/ht_8.json": ["hightier", 7],
			"/pa/units/land/ht_9/ht_9.json": ["hightier", 8],
			"/pa/units/land/ht_10/ht_10.json": ["hightier", 9],
			"/pa/units/land/ht_11/ht_11.json": ["hightier", 10],
			"/pa/units/land/ht_12/ht_12.json": ["hightier", 11],
			"/pa/units/land/ht_13/ht_13.json": ["hightier", 12],
			"/pa/units/land/ht_14/ht_14.json": ["hightier", 13],
			
			
			"/pa/units/land/point_t1/point_t1.json": ["defense", 0],
			"/pa/units/land/point_t2/point_t2.json": ["defense", 1],
			"/pa/units/land/point_t3/point_t3.json": ["defense", 2],
			"/pa/units/land/point_t4/point_t4.json": ["defense", 3],
			"/pa/units/land/point_t5/point_t5.json": ["defense", 4],
			"/pa/units/land/cannon_t1/cannon_t1.json": ["defense", 5],
			"/pa/units/land/cannon_t2/cannon_t2.json": ["defense", 6],
			"/pa/units/land/cannon_t3/cannon_t3.json": ["defense", 7],
			"/pa/units/land/cannon_t4/cannon_t4.json": ["defense", 8],
			"/pa/units/land/cannon_t5/cannon_t5.json": ["defense", 9],
			"/pa/units/land/singlehit_t1/singlehit_t1.json": ["defense", 10],
			"/pa/units/land/singlehit_t2/singlehit_t2.json": ["defense", 11],
			"/pa/units/land/singlehit_t3/singlehit_t3.json": ["defense", 12],
			"/pa/units/land/singlehit_t4/singlehit_t4.json": ["defense", 13],
			"/pa/units/land/singlehit_t5/singlehit_t5.json": ["defense", 14],
			
			
			"/pa/units/land/metal_t2/metal_t2.json": ["economy", 11],
			"/pa/units/land/metal_t3/metal_t3.json": ["economy", 12],
			"/pa/units/land/metal_t4/metal_t4.json": ["economy", 13],
			"/pa/units/land/metal_t5/metal_t5.json": ["economy", 14],
			
			
			"/pa/units/air/defense_builder/defense_builder.json": ["castle", 10],
			"/pa/units/land/lt_factory/lt_factory.json": ["castle", 11],
			"/pa/units/land/ht_factory/ht_factory.json": ["castle", 12],
			"/pa/units/land/metal_t1/metal_t1.json": ["castle", 13]
        }
    );
};
