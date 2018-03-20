<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


//$inputJSON = file_get_contents('php://input');
//$input= json_decode( $inputJSON, TRUE ); 
//echo "->".$postid = $input['postId'];

$prev_next_flag = false ;
$conn = new mysqli("localhost","root", "@Password1","ang-blog");
// Check connection
if($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
} 
$post_patch = '';
if(isset($_REQUEST['postId']))
{
     $postId = $_REQUEST['postId'] ;
     $post_patch = " where PostId = ".$postId;
     $prev_next_flag = true;
}else if(isset($_REQUEST['searchvalue']) && $_REQUEST['searchvalue'] != 'undefined')
{
    $searchvalue = $_REQUEST['searchvalue'];
    $post_patch = " where Title like '%".$searchvalue."%'";
}
$sql = "SELECT PostId,Title,ShortDetail,Detail,img,DateEntered from posts $post_patch ORDER by DateEntered asc ";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        //echo  $row["Title"];
        $rows[] = $row ; 
    }
} else {
    echo "0 results";
}

$data['data'] = $rows;

print json_encode($data);
mysqli_close($link);
exit;
?>
<!--[{"Title": "POST Title 1", "Detail": "Details 1"},{"Title":"POST Title 2","Detail": "Detail 2"}] -->
