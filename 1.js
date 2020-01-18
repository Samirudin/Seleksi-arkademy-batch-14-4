function biodataSaya(nama, umur) {
	var profile = {
		name : nama,
		age : umur,
		address : 'Jln. Poros Liya, Kec. Wangi-Wangi Selatan, Kab. Wakatobi',
		is_married : false,
		list_school: [
		{
			school_name: 'SMA Negeri 4 Wangi-Wangi',
			major: 'IPA',
			year_in : 2012,
			year_out : 2015
		},
		{
			university_name : 'Universitas Halu Oleo',
			major: 'Biologi',
			year_in: 2015,
			year_out:2019
		}
		],
		skills: [
		{
			skill_name : 'HTML dan CSS',
			level : 'advanced'
		},
		{
			skill_name : 'JavaScript',
			level : 'Beginner'
		}
		],
		interest_in_coding: true
	};
	var myJSON = JSON.stringify(profile);
	return myJSON;
};


console.log(biodataSaya('Samirudin', 22))