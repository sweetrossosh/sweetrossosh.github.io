var names = [["../photos/difficult/58R35XON.jpg", 0],
             ["../photos/difficult/EEQDAT5C.jpg", 0],
             ["../photos/holidays/QVADL8W0.jpg", 1],
			 ["../photos/holidays/2S4UAM79.jpg", 1],
			 ["../photos/holidays/K8OMQMMB.jpg", 1],
			 ["../photos/holidays/KWLIBIKX.jpg", 1],
			 ["../photos/holidays/L3TRITJD.jpg", 1],
			 ["../photos/childrens/R8DE0F6G.jpg", 2],
			 ["../photos/childrens/QIOAOW3F.jpg", 2],
			 ["../photos/childrens/8CYRBBGX.jpg", 2],
			 ["../photos/childrens/3312QVVU.jpg", 2],
			 ["../photos/childrens/B14D80A0.jpg", 2],
			 ["../photos/childrens/GZU0OCS1.jpg", 2],
			 ["../photos/other/QGNOPPFH.jpg", 3],
			 ["../photos/other/ANKBRLGX.jpg", 3],
			 ["../photos/other/MWKZPUKC.jpg", 3],
			 ["../photos/other/U2KWFIRC.jpg", 3]];
			 
names.sort(function sf(A, B){
	return A[1] > B[1];
});

var cat = [
	{
		index: {left: -1, right: -1
		},value: "Многоярусные" // 0
	},
	{
		index: {left: -1, right: -1
		},value: "Тематические" // 1
	},
	{
		index: {left: -1, right: -1
		},value: "Детские" // 2
	},
	{
		index: {left: -1, right: -1
		},value: "Разные" // 3
	}
];

var J = -1;
for(var X = 0; X < names.length; ++X)
{
	if (names[X][1] != J)
	{
		J = names[X][1];
		cat[J].index.left = X + 1;
	}
	cat[J].index.right = X + 1;
}