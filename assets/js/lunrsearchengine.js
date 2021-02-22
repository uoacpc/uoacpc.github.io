
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "About",
    "body": "What is competitive programming anyway?Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications (totally not copied from Wikipedia). In essence, it is about solving ridiculously difficult problems within unfairly short time limits (because why not). Why is it even a thing?Because it’s fun! Ask anyone who has done these contests - they are addicting and fun. Employment: Most competitions are sponsored by multinational software companies such as Google, Microsoft, IBM etc. Each year, they take students who performed well in the contest and offer them positions. Love of problem solving: The problems that you will see are posed as real-world problems, and often will mask the underlying question. You will need to use many ideas that you have learnt in order to solve them. Tell me about the club already!Alright alright, calm down, I hear ya. The Competitive Programming Club is a not-for-profit, student-run club dedicated to promote and nurture the sport of (you guessed it) ‘Competitive programming’ at The University of Adelaide. We host practice competitions and training workshops where we solve problems, discuss algorithms, cry over the parts we didn’t understand, figure things out, and celebrate with free food. If you think you’re the next Larry Page, this is not the club for you. If you want to be the next Larry Page, then this club maybe what you are looking for. All skill levels are welcome because, let’s be honest, everyone is going to struggle. Contact UsWe encourage you to engage with us via either Facebook or Discord. For more formal enquiries, please email us here. "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           ICPC Regionals 2020                              :               Today, 63 teams of young programmers competed in the International Collegiate Programming Contest across the South Pacific region. 14 out of these 63 teams were. . . :                                                                                                                                                                       CPC                                23 Jan 2021                                                                                                                                                                                                                                                                                                                  2021 Committee Elections                              :               Hey everyone, following our AGM last night we have officially locked in a new commitee for 2021!:                                                                                                                                                                       CPC                                08 Oct 2020                                                                                                                            All Stories:                                                                                                     ICPC Regionals 2020              :       Today, 63 teams of young programmers competed in the International Collegiate Programming Contest across the South Pacific region. 14 out of these 63 teams were from our club, making it. . . :                                                                               CPC                23 Jan 2021                                                                                                                                     2021 Committee Elections              :       Hey everyone, following our AGM last night we have officially locked in a new commitee for 2021!:                                                                               CPC                08 Oct 2020                                                                                                                                     ICPC Divisionals 2018              :       ICPC divisional finals has officially ended! This year we had 4 teams from UofA, all of which put in great effort. :                                                                               CPC                20 Oct 2018                                            "
    }, {
    "id": 4,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "/ICPC-Regionals-2020/",
    "title": "ICPC Regionals 2020",
    "body": "2021/01/23 - Today, 63 teams of young programmers competed in the International Collegiate Programming Contest across the South Pacific region. 14 out of these 63 teams were from our club, making it the most active competitive programming community in all of South Pacific region! Huge congratulations to  BotezGambit (Ragav Sachdeva, Brandon Smart, Rijul Ramkumar) for placing 9th in Division 1.  Nameless (Hamish Spencer, Billy Roberts, Kosta Tsekouras) for placing 8th in Division 2. "
    }, {
    "id": 6,
    "url": "/2021-committee/",
    "title": "2021 Committee Elections",
    "body": "2020/10/08 - Hey everyone, following our AGM last night we have officially locked in a new commitee for 2021! Congratulations to the new team and looking forward to see the great things you will do for the club! Starting from the right of the image here is the new team-  President- Ralf Saroar Vice President- Rijul Ramkumar Events Coordinator- Sarah Damin Industry Liason- Matthew Michael Secretary- Vikhyat Sharma Treasurer- Shyla Lee Web Developer- Joph Larena"
    }, {
    "id": 7,
    "url": "/ICPC-Divisionals-2018/",
    "title": "ICPC Divisionals 2018",
    "body": "2018/10/20 - ICPC divisional finals has officially ended! This year we had 4 teams from UofA, all of which put in great effort.    The first position was bagged by Stinkypete (Yuanjing Zhao, Hoang Vinh Dinh, Christo Pyromallis) - they solved 11/12 problems and got themselves an overall rank of 6 i. e. they are going to regionals for sure (although official notices have yet to come)     The second position was bagged by TensorMellow (Miguel Martin, Farbod Motlagh, Ragav Sachdeva) - they solved 10/12 problems and got themselves an overall rank of 14 (it’s likely they won’t make it to regionals due to their high time penalty though).     The third position was bagged by 3SpacesPerTab (Brandon Smart, Chris Shi) - they solved 8/12 problems and got themselves an overall rank of 26. Note: that it was a team of 2 only and both being FIRST year students.  These are great results and we look forward to the results of regionals!! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});