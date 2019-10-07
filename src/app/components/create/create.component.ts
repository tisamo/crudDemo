import {Component, OnInit} from '@angular/core';
import {TreeModel} from '../../interfaces/tree-model';
import {TreeService} from '../../services/tree.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  tree: TreeModel;
  climates: string[] = ['Tropical', 'Dry', 'Mediteran', 'Temperate', 'Polar'];

  constructor(private treeService: TreeService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.tree = new TreeModel();
  }

  create() {
    this.treeService.create(this.tree).subscribe(() => {
      this.back();
    }, error => {
      this.toastr.error('Please add every informaion.');
    });
  }

  back() {
    this.router.navigateByUrl('index');
  }
}
