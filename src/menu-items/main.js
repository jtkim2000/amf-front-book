// icons
import {CommentOutlined} from '@ant-design/icons';

const icons = {
	CommentOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const main = {
	id: 'main-menu',
	title: '메인메뉴',
	type: 'group',
	children: [
		{
			// id: '메뉴 id',
			// title: '메뉴 제목',
			// type: 'collapse',
			// icon: 아이콘,
			// children: [
			// 	{
			// 		id: '메뉴 id',
			// 		title: '메뉴 제목',
			// 		type: 'item',
			// 		url: '메뉴랑 매핑할 url',
			// 	},
			// ],

			id: 'booklist',
			title: '도서',
			type: 'collapse',
			icon: icons.CommentOutlined,
			children: [
				{
					id: 'my-booklist',
					title: '도서목록',
					type: 'item',
					url: '/booklist',
				},
			],
		},
	],
};

export default main;
