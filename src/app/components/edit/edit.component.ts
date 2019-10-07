import {Component, OnInit} from '@angular/core';
import {TreeService} from '../../services/tree.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TreeModel} from '../../interfaces/tree-model';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  tree: TreeModel;
  climates: string[] = ['Tropical', 'Dry', 'Mediteran', 'Temperate', 'Polar'];
  constructor(private treeService: TreeService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr:ToastrService) {
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
        this.toastr.error('Please add every informaion.');
      });
  }

  edit() {
    this.treeService.edit(this.tree).subscribe(() => {
      this.back();
    }, error => {
      this.toastr.error('Server is not running or you left the some credentials bland.');
    });
  }

  back() {
    this.router.navigateByUrl('index');
  }
}
