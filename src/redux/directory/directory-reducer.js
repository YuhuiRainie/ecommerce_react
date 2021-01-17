const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQA2SgCL_ij4Rt6CsP1rpnJBrlnzsoJqbL6gRObWR1mZemcTuuerg3M55vboAwkeB52I3LR8dbGFnGMTOvwHvtYdNdNVrMa1bv0rUdUZ_dBmMa6AtXknjmARw&usqp=CAE',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYb_VyMry909ajr_axd5HDX_-d7Mf1TP4uXeyIZBsO3VMiIGv4uPekzpZ5P8YA90nlC2MSBV429hOFDWhBg6KjyPrs-p9nvGxwijwCl8VC3p2q82WBCmREcg&usqp=CAE',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8JigqpX91q2MJ9eOM87ZYY_iqH_ipTeOYkkL31c_M1kfum9P1qY7lh-BIbmKhyZ7EBAA7QXs-7w8PhNAPfGNknkf7I8kbCXpOomSx08x1WwQqsFYo0qsICQ&usqp=CAE',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'dresses',
            imageUrl: '//img.ltwebstatic.com/images3_pi/2020/12/10/16075793839cc0eda77878e14104549510d3d156a2_thumbnail_405x552.webp',
            size: 'large',
            id: 4,
            linkUrl: 'shop/dresses'
        },
        {
            title: 'shirts',
            imageUrl: '//img.ltwebstatic.com/images3_pi/2021/01/05/160981355851801ef73f805a6b00d803c1adc5f279_thumbnail_405x552.webp',
            size: 'large',
            id: 5,
            linkUrl: 'shop/shirts'
        }
    ]
}

const directoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer;
