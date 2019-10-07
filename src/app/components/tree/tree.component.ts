import {Component, OnInit} from '@angular/core';
import {TreeModel} from '../../interfaces/tree-model';
import {TreeService} from '../../services/tree.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  tree: TreeModel;
  randomPictures: string[] = ['https://comps.canstockphoto.hu/b%C3%BCkkfa-%C3%B6reg-erd%C5%91-stock-fot%C3%B3_csp28604624.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Surnenapoliana.jpg'];

  constructor(private treeService: TreeService, private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService) {

  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (!id) {
      // TODO handle
    }

    this.treeService.getTree(id).subscribe(tree => {
        this.tree = tree;

      },
      error => {

      });
  }

  setRandomPicture() {
    const length =this.randomPictures.length;
    const random =Math.floor(Math.random() *length);
    this.tree.image = this.randomPictures[random];
    this.toastr.error('Img link is not valid. Random image has been used.')
  }
  back() {
    this.router.navigateByUrl('index');
  }
}
